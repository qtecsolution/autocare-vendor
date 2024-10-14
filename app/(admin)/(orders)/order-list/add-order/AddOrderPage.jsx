"use client";
import axiosInstance from "@/lib/axiosInstance";
import React, { useState } from "react";
import Select from "react-select";

function AddOrderPage({ orderIntData }) {
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
console.log(orderProducts);

  const payment_method = [
    { value: 1, label: "Cash on Delivery" },
    { value: 2, label: "Online Payment" },
  ];

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
    updatedProducts[index].quantity = e.target.value;
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

  return (
    <main id="content">
      <section className="edit-garage-header">
        <div className="edit-garage-header-inner">
          <div className="header-text">
            <h1 className="title">Create Order</h1>
            <p className="details">Make Changes and publish for review</p>
          </div>
        </div>
      </section>

      <section className="edit-garage-body">
        <div className="edit-garage-body-inner">
          <div className="d-flex flex-column gap-3">
            <div className="edit-product">
              <form className="d-flex flex-column gap-4">
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
                    />
                  </div>

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
                      </div>

                      <div className="col-sm-6 col-md-4">
                        <div className="box">
                          <label className="category-select-label">
                            Variant Name <span>*</span>
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
                              onChange={(e) =>
                                handleQuantityChange(index, e)
                              }
                              value={orderProduct.quantity}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-md-2">
                        <div className="inner-input">
                          <div className="d-flex flex-column gap-2">
                            <label className="label-text" htmlFor="part">
                              Unit Price <span>*</span>
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
                    </div>

                    <div className="col-sm-4">
                      <div className="inner-input">
                        <div className="d-flex flex-column gap-2">
                          <label className="label-text" htmlFor="total-quantity">
                            Total Quantity <span>*</span>
                          </label>
                          <input
                            className="input input-disabled"
                            type="number"
                            id="total-quantity"
                            placeholder="0"
                            value={orderProducts.reduce(
                              (acc, item) => acc + Number(item.quantity),
                              0
                            )}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="inner-input">
                        <div className="d-flex flex-column gap-2">
                          <label className="label-text" htmlFor="total-price">
                            Total Price <span>*</span>
                          </label>
                          <input
                            className="input input-disabled"
                            type="number"
                            id="total-price"
                            placeholder="0"
                            value={orderProducts.reduce(
                              (acc, item) =>
                                acc + Number(item.quantity) * item.price,
                              0
                            )}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end mt-3">
                    <button className="primary-button">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AddOrderPage;
