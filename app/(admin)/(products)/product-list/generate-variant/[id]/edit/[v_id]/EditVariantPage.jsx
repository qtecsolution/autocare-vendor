"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AlertToast from "@/components/toast/AlertToast";
import SuccessToast from "@/components/toast/Success";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { getAuthUser } from "@/utils/auth";

function EditVariantPage({ productID, variantID }) {
  const router = useRouter();
  const initialErrors = {
    sku: "",
    price: "",
  };
  const [errors, setErrors] = useState(initialErrors);
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [commission, setCommission] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState("");
  const [isDefaultVariant, setIsDefaultVariant] = useState(false);

  const [variantDetails, setVariantDetails] = useState(""); // for loading state

  const sellerInfo = getAuthUser();
  useEffect(() => {
    const businessType = sellerInfo?.business_type?.name;
    if (businessType === "Service") {
      router.push("/");
    }
  }, [sellerInfo, router]);

  useEffect(() => {
    const calculatedFinalPrice = discountPrice
      ? Number(discountPrice) + (Number(discountPrice) * commission) / 100
      : Number(price) + (Number(price) * commission) / 100;
    setFinalPrice(calculatedFinalPrice);
  }, [discountPrice, price, commission]);

  const getVariantDetails = async () => {
    try {
      const response = await axiosInstance.get(
        `/seller-panel-api/frontend/product-variant/${variantID}/get-variant-details/`
      );
      setVariantDetails(response.data);
      console.log(response, "res");
      setCommission(response.data?.product?.commission_rate);
      setSku(response.data?.sku || "");
      setPrice(response.data?.price || "");
      setDiscountPrice(response.data?.discount_price || "");
      setStock(response.data?.stock || "");
      setIsDefaultVariant(response.data?.is_default_variant || false);
    } catch (error) {
      console.log("Error fetching variant details", error);
    }
  };

  // Fetch variant details when the component mounts or when variantID changes
  useEffect(() => {
    getVariantDetails();
  }, [variantID]); // Re-fetch when `variantID` changes

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const { width, height } = img;
        if (width === height) {
          setImage(file);
        } else {
          toast.custom((t) => (
            <AlertToast
              message="Thumbnail must have a 1:1 aspect ratio."
              dismiss={() => toast.dismiss(t.id)}
            />
          ));
        }
      };
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!sku) newErrors.sku = "SKU is required";
    if (!price) newErrors.price = "Price is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const formData = new FormData();
      formData.append("sku", sku);
      formData.append("price", price);
      formData.append('finalPrice', finalPrice);
      if (discountPrice) {
        formData.append("discountPrice", discountPrice);
      }
      formData.append("image", image);
      formData.append("stock", stock);
      formData.append("isDefaultVariant", isDefaultVariant);

      try {
        const response = await axiosInstance.put(
          `/seller-panel-api/frontend/product-variant/${variantID}/update-variant/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast.custom((t) => (
          <SuccessToast
            message={response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
        router.refresh();
        router.push(`/product-list/generate-variant/${productID}`);
      } catch (error) {
        console.log(error);
        toast.custom((t) => (
          <AlertToast
            message={error?.response?.data?.message || "Something Wrong !"}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  };
  return (
    <div id="content">
      <div className="d-flex flex-column h-100">
        <div className="flex-grow-1">
          <div className="inner-content">
            <section className="variant-section">
              <div className="variant-section-inner">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="variant-input-inner">
                      <div className="variant-label">
                        <p className="text">
                          Product <span className="text-danger">*</span>
                        </p>
                      </div>

                      <div className="variant-input">
                        <input
                          type="text"
                          name=""
                          className="bg-light"
                          id=""
                          value={variantDetails?.product?.name}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="variant-input-inner">
                      <div className="variant-label">
                        <p className="text">
                          SKU <span className="text-danger">*</span>
                        </p>
                      </div>

                      <div className="variant-input">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter here"
                          value={sku}
                          onChange={(e) => setSku(e.target.value)}
                        />
                      </div>
                    </div>
                    {errors.sku && (
                      <div className="error-message text-danger">
                        <small>{errors.sku}</small>
                      </div>
                    )}
                  </div>

                  <div className="col-md-4">
                    <div className="variant-input-inner">
                      <div className="variant-label">
                        <p className="text">
                          Price <span className="text-danger">*</span>
                        </p>
                      </div>

                      <div className="variant-input">
                        <input
                          type="number"
                          name=""
                          id=""
                          placeholder="Enter here"
                          min={0}
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    {errors.price && (
                      <div className="error-message text-danger">
                        <small>{errors.price}</small>
                      </div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <div className="variant-input-inner">
                      <div className="variant-label">
                        <p className="text">Discount Price</p>
                      </div>

                      <div className="variant-input">
                        <input
                          type="number"
                          name=""
                          id=""
                          placeholder="Enter here"
                          min={0}
                          value={discountPrice}
                          onChange={(e) => setDiscountPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="variant-input-inner">
                      <div className="variant-label">
                        <p className="text">Final Price</p>
                      </div>

                      <div className="variant-input">
                        <input
                          type="number"
                          className="bg-light"
                          name=""
                          id=""
                          value={finalPrice}
                          readOnly
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="variant-input-inner">
                      <div className="variant-label">
                        <p className="text">Image</p>
                      </div>

                      <div className="">
                        <input
                          className="form-control custom-file-input"
                          type="file"
                          id="formFile"
                          accept=".png,.jpg,.jpeg"
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="variant-input-inner">
                      <div className="variant-label">
                        <p className="text">Stock</p>
                      </div>

                      <div className="variant-input">
                        <input
                          type="number"
                          min={0}
                          name=""
                          id=""
                          placeholder="Enter here"
                          value={stock}
                          onChange={(e) => setStock(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="checkbox-inner">
                      <input
                        className="box-checkbox"
                        type="checkbox"
                        id="checkbox4"
                        value={isDefaultVariant}
                        onClick={() => setIsDefaultVariant(!isDefaultVariant)}
                        checked={isDefaultVariant}
                      />
                      <label for="checkbox4" tabindex="4" className="text">
                        Is default variant
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      onClick={handleSubmit}
                      className="primary-button px-md-5 rounded-3"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVariantPage;
