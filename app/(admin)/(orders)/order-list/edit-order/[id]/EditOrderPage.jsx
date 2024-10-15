"use client";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import toast from "react-hot-toast";
import AlertToast from "@/components/toast/AlertToast";
import SuccessToast from "@/components/toast/Success";

function EditOrderPage({ orderIntData, orderDetails }) {
  const router = useRouter();
  const customers = orderIntData?.customers;
  const products = orderIntData?.products;
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [orderProducts, setOrderProducts] = useState([
    {
      selectedProduct: "",
      selectedVariant: "",
      hasVariant: false,
      variants: [],
      quantity: 0,
      stock: 0,
      price: 0,
    },
  ]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    customer: "",
    product: [],
    quantity: [],
    paymentMethod: "",
  });

  const payment_method = [
    { value: 1, label: "Cash on Delivery" },
    { value: 2, label: "Online Payment" },
  ];

  useEffect(() => {
    if (orderDetails) {
      // Set the selected customer
      const customer = customers.find(
        (c) => c.id === orderDetails.order.customer.id
      );
      setSelectedCustomer(
        customer ? { value: customer.id, label: customer.full_name } : null
      );

      // Set the payment method
      const paymentMethodOption = payment_method.find(
        (pm) => pm.label === orderDetails.order.payment_method.name
      );
      setPaymentMethod(paymentMethodOption || null);

      // Set order products
      const initialOrderProducts = orderDetails.items.map((item) => {
        const foundProduct = products.find((p) => p.id === item.product.id); // Ensure correct access to product ID

        return {
          selectedProduct: foundProduct
            ? { value: foundProduct.id, label: foundProduct.name }
            : null, // Update for product
          selectedVariant: item.product_variant
            ? {
                value: item.product_variant.id,
                label: item.product_variant.attribute_values,
                price: item.unit_price,
                stock: item.product_variant.stock,
              }
            : null,
          hasVariant: !!item.product_variant,
          variants: [], // You can fill this if needed
          quantity: item.quantity,
          stock: item.product_variant
            ? item.product_variant.stock
            : item.product.stock,
          price: parseFloat(item.unit_price),
        };
      });

      setOrderProducts(initialOrderProducts);
    }
  }, [orderDetails, customers, products]);

  const handleCustomerChange = (selectedOption) => {
    setSelectedCustomer(selectedOption);
  };

  const handleProductChange = async (index, selectedOption) => {
    const updatedProducts = [...orderProducts];
    updatedProducts[index].selectedProduct = selectedOption;
    updatedProducts[index].hasVariant = selectedOption?.is_variant_has;
    updatedProducts[index].price = selectedOption?.price;
    updatedProducts[index].stock = selectedOption?.stock;
    updatedProducts[index].selectedVariant = "";

    if (selectedOption?.is_variant_has) {
      try {
        const res = await axiosInstance.get(
          `/seller-panel-api/frontend/get-product-variant/${selectedOption?.value}/`
        );
        updatedProducts[index].variants = res?.data?.variants;
      } catch (error) {
        console.error("Failed to fetch variants", error);
      }
    } else {
      updatedProducts[index].variants = [];
    }

    setOrderProducts(updatedProducts);
  };

  const handleVariantChange = (index, selectedOption) => {
    const updatedProducts = [...orderProducts];
    updatedProducts[index].selectedVariant = selectedOption;
    updatedProducts[index].price = selectedOption?.price;
    updatedProducts[index].stock = selectedOption?.stock;
    setOrderProducts(updatedProducts);
  };

  const handleQuantityChange = (index, e) => {
    const updatedProducts = [...orderProducts];
    const enteredQuantity = Number(e.target.value);
    const stockAvailable = updatedProducts[index].stock;

    // Check if entered quantity exceeds available stock
    if (enteredQuantity > stockAvailable) {
      toast.custom((t) => (
        <AlertToast
          message={`Quantity exceeds available stock. Only ${stockAvailable} items left.`}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
      return;
    }

    updatedProducts[index].quantity = enteredQuantity;
    setOrderProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    setOrderProducts([
      ...orderProducts,
      {
        selectedProduct: "",
        selectedVariant: "",
        hasVariant: false,
        variants: [],
        quantity: 0,
        stock: 0,
        price: 0,
      },
    ]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...orderProducts];
    updatedProducts.splice(index, 1);
    setOrderProducts(updatedProducts);
  };

  const handlePaymentMethodChange = (selectedOption) => {
    setPaymentMethod(selectedOption);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    setErrors({
      customer: "",
      product: [],
      quantity: [],
      paymentMethod: "",
    });

    let hasError = false;

    // Validate customer
    if (!selectedCustomer) {
      setErrors((prev) => ({ ...prev, customer: "Customer is required." }));
      hasError = true;
    }

    // Validate products and quantities
    const productErrors = [];
    const quantityErrors = [];

    orderProducts.forEach((product, index) => {
      if (!product.selectedProduct) {
        productErrors[index] = "Product is required.";
        hasError = true;
      }
      if (product.quantity <= 0) {
        quantityErrors[index] = "Quantity must be at least 1.";
        hasError = true;
      }
    });

    setErrors((prev) => ({
      ...prev,
      product: productErrors,
      quantity: quantityErrors,
    }));

    // Validate payment method
    if (!paymentMethod) {
      setErrors((prev) => ({
        ...prev,
        paymentMethod: "Payment method is required.",
      }));
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return; // Stop the submission if there are validation errors
    }

    // Transform the orderProducts data into the required format
    const orderItems = orderProducts.map((product) => ({
      productId: product.selectedProduct?.value,
      quantity: Number(product.quantity),
      productVariantId: product.selectedVariant
        ? product.selectedVariant?.value
        : null,
      unitPrice: Number(product.price),
    }));

    const totalPrice = orderProducts.reduce(
      (acc, item) => acc + Number(item.quantity) * Number(item.price),
      0
    );

    const payload = {
      customerId: orderDetails?.order?.customer?.id,
      paymentMethod: paymentMethod?.value,
      totalPrice: totalPrice,
      orderItems: orderItems,
    };

    try {
      const response = await axiosInstance.put(
        `/seller-panel-api/frontend/update-order/${orderDetails?.order?.id}/`,
        payload
      );
      console.log("Order updated successfully:", response.data);
      // setSelectedCustomer("");
      // setOrderProducts([
      //   {
      //     selectedProduct: "",
      //     selectedVariant: "",
      //     hasVariant: false,
      //     variants: [],
      //     quantity: 0,
      //     stock: 0,
      //     price: 0,
      //   },
      // ]);
      // setPaymentMethod("");

      toast.custom((t) => (
        <SuccessToast
          message={response.data.message}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));

      router.push("/order-list");
      router.refresh();
    } catch (error) {
      console.error("Failed to create order:", error);
      toast.custom((t) => (
        <AlertToast
          message={error.response.data.message}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="content">
      <section className="edit-garage-header">
        <div className="edit-garage-header-inner">
          <div className="header-text">
            <h1 className="title">Edit Order</h1>
            <p className="details">Make Changes and publish for review</p>
          </div>
        </div>
      </section>

      <section className="edit-garage-body">
        <div className="edit-garage-body-inner">
          <div className="d-flex flex-column gap-3">
            <div className="edit-product">
              <div className="d-flex flex-column gap-4">
                <div className="category-select">
                  <div className="box">
                    <label className="category-select-label">
                      Customer <span>*</span>
                    </label>
                    <Select
                      options={customers.map((customer) => ({
                        value: customer.id,
                        label: customer.full_name,
                      }))}
                      placeholder="Select Customer"
                      value={selectedCustomer}
                      onChange={handleCustomerChange}
                      isDisabled={true}
                    />
                  </div>
                  {errors.customer && (
                    <small className="text-danger">{errors.customer}</small>
                  )}

                  {orderProducts.map((orderProduct, index) => (
                    <div key={index} className="row g-3 mt-2">
                      <div className="col-sm-6 col-md-4">
                        <div className="box">
                          <label className="category-select-label">
                            Product <span>*</span>
                          </label>
                          <Select
                            options={products.map((product) => ({
                              value: product.id,
                              label: product.name,
                              price: product?.discount_price
                                ? product?.discount_price
                                : product?.price,
                              stock: product?.stock,
                              is_variant_has: product?.is_variant_available,
                            }))}
                            placeholder="Select Product"
                            value={orderProduct.selectedProduct}
                            onChange={(selectedOption) =>
                              handleProductChange(index, selectedOption)
                            }
                          />
                        </div>
                        {errors.product[index] && (
                          <small className="text-danger">
                            {errors.product[index]}
                          </small>
                        )}
                      </div>

                      <div className="col-sm-6 col-md-4">
                        <div className="box">
                          <label className="category-select-label">
                            Variant Name
                          </label>
                          <Select
                            isDisabled={!orderProduct.hasVariant}
                            options={orderProduct.variants?.map((variant) => ({
                              value: variant?.id,
                              label: variant?.attribute_values,
                              price: variant?.price,
                              stock: variant?.stock,
                            }))}
                            placeholder="select Variant"
                            value={orderProduct.selectedVariant}
                            onChange={(selectedOption) =>
                              handleVariantChange(index, selectedOption)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-2">
                        <div className="inner-input">
                          <div className="d-flex flex-column gap-2">
                            <label className="label-text" htmlFor="quantity">
                              Quantity <span>*</span>
                            </label>
                            <input
                              className="input"
                              type="number"
                              name=""
                              id="quantity"
                              placeholder="0"
                              min={0}
                              onChange={(e) => handleQuantityChange(index, e)}
                              value={
                                orderProduct.quantity === 0
                                  ? ""
                                  : orderProduct.quantity
                              }
                            />
                          </div>
                          {errors.quantity[index] && (
                            <small className="text-danger">
                              {errors.quantity[index]}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-2">
                        <div className="inner-input">
                          <div className="d-flex flex-column gap-2">
                            <label className="label-text" htmlFor="part">
                              Unit Price
                            </label>
                            <input
                              className="input input-disabled"
                              type="number"
                              name=""
                              id="part"
                              placeholder="0"
                              min={0}
                              value={orderProduct.price}
                            />
                          </div>
                        </div>
                      </div>

                      {index > 0 && (
                        <div className="col-sm-12">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveProduct(index)}
                            style={{ color: "white" }}
                          >
                            Remove Product
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="d-flex justify-content-end mt-3">
                    <button
                      type="button"
                      className="primary-button"
                      onClick={handleAddProduct}
                    >
                      + ADD MORE PRODUCT
                    </button>
                  </div>

                  <div className="row g-3 mt-2">
                    <div className="col-sm-4">
                      <div className="box">
                        <label className="category-select-label">
                          Payment Method <span>*</span>
                        </label>
                        <Select
                          options={payment_method}
                          value={paymentMethod}
                          onChange={handlePaymentMethodChange}
                          placeholder="Select Payment Method"
                        />
                      </div>
                      {errors.paymentMethod && (
                        <small className="text-danger">
                          {errors.paymentMethod}
                        </small>
                      )}
                    </div>

                    {/* Total Quantity */}
                    <div className="col-sm-4">
                      <div className="inner-input">
                        <div className="d-flex flex-column gap-2">
                          <label className="label-text">Total Quantity</label>
                          <input
                            className="input input-disabled"
                            type="number"
                            placeholder="0"
                            min={0}
                            value={orderProducts.reduce(
                              (acc, item) => acc + Number(item.quantity),
                              0
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Total Amount */}
                    <div className="col-sm-4">
                      <div className="inner-input">
                        <div className="d-flex flex-column gap-2">
                          <label className="label-text">Total Amount</label>
                          <input
                            className="input input-disabled"
                            type="number"
                            placeholder="0"
                            min={0}
                            value={orderProducts.reduce(
                              (acc, item) =>
                                acc +
                                Number(item.quantity) * Number(item.price),
                              0
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end mt-3">
                    <button
                      className="primary-button"
                      type="submit"
                      disabled={loading}
                      onClick={handleUpdate}
                    >
                      {loading ? "Updating..." : "Update"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EditOrderPage;
