'use client';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import axiosInstance from '@/lib/axiosInstance';
import { getAuthUser } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
export default function AddVoucher({ voucherCreationData }) {
  const router = useRouter();
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [categoryShow, setCategoryShow] = useState(false);
  const [brandShow, setBrandShow] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const initialFormData = {
    voucherType: 1,
    discountType: 'fixed',
    discountValue: '',
    minimumPurchaseAmount: '',
    validFrom: '',
    validTo: '',
    isActive: true,
    productIds: [],
    categoriesIds: [],
    brandIds: [],
    excludeCategoryIds: [],
    excludeBrandIds: [],
    excludeProductIds: [],
  };
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = newValues => {
    setFormData(prevData => ({
      ...prevData,
      ...newValues, // Spread the new values to overwrite specific keys
    }));
  };
  useEffect(() => {
    //generale = 1;
    //category = 2;
    //brand = 3;
    //product = 4;

    if (formData?.voucherType == 2) {
      setCategoryShow(true);
      setBrandShow(false);
      setProductShow(false);
      updateFormData({
        productIds: [],
        categoriesIds: [],
        brandIds: [],
        excludeCategoryIds: [],
        excludeBrandIds: [],
        excludeProductIds: [],
      });
    } else if (formData?.voucherType == 3) {
      setCategoryShow(false);
      setBrandShow(true);
      setProductShow(false);
      updateFormData({
        productIds: [],
        categoriesIds: [],
        brandIds: [],
        excludeCategoryIds: [],
        excludeBrandIds: [],
        excludeProductIds: [],
      });
    } else if (formData?.voucherType == 4) {
      setCategoryShow(false);
      setBrandShow(false);
      setProductShow(true);
      updateFormData({
        productIds: [],
        categoriesIds: [],
        brandIds: [],
        excludeCategoryIds: [],
        excludeBrandIds: [],
        excludeProductIds: [],
      });
    } else {
      setCategoryShow(false);
      setBrandShow(false);
      setProductShow(false);
      updateFormData({
        productIds: [],
        categoriesIds: [],
        brandIds: [],
        excludeCategoryIds: [],
        excludeBrandIds: [],
        excludeProductIds: [],
      });
    }
  }, [formData.voucherType]);
  useEffect(() => {
    if (voucherCreationData?.categories) {
      const formattedCategories = voucherCreationData.categories.map(
        category => ({
          value: category.id,
          label: category.name,
        })
      );
      setCategoryOptions(formattedCategories);
    }
    if (voucherCreationData?.brands) {
      const formattedBrands = voucherCreationData.brands.map(brand => ({
        value: brand.id,
        label: brand.name,
      }));
      setBrandOptions(formattedBrands);
    }
    if (voucherCreationData?.product) {
      const formattedProducts = voucherCreationData.products.map(product => ({
        value: product.id,
        label: product.name,
      }));
      setProductOptions(formattedProducts);
    }
  }, [voucherCreationData]);

  // Update form data when input changes
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const fieldValue =
      type === 'radio' ? Number(value) : type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleMultiSelectChange = (selectedOptions, fieldName) => {
    const selectedValues = selectedOptions.map(option => option.value);

    setFormData(prevData => ({
      ...prevData,
      [fieldName]: selectedValues,
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.voucherType)
      newErrors.voucherType = 'Voucher type is required';
    if (!formData.discountType)
      newErrors.discountType = 'Discount type is required';
    if (!formData.discountValue)
      newErrors.discountValue = 'Discount value is required';
    if (!formData.minimumPurchaseAmount)
      newErrors.minimumPurchaseAmount = 'Minimum purchase amount is required';
    if (!formData.validFrom) newErrors.validFrom = 'Start date is required';
    if (!formData.validTo) newErrors.validTo = 'End date is required';

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
    try {
      const response = await axiosInstance.post(
        '/seller-panel-api/frontend/create-voucher/',
        {
          ...formData,
        }
      );
      setFormData(initialFormData);
      toast.custom(t => (
        <SuccessToast
          message={response.data.message}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
      router.push('/voucher-list/');
    } catch (err) {
      setErrors({ form: 'Error creating voucher.' });
      toast.custom(t => (
        <AlertToast
          message={err.response.data.message}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    } finally {
      setLoading(false);
    }
  };

  const inputRefFrom = useRef(null);
  const inputRefTo = useRef(null);
  const handleSvgClickFrom = () => {
    // Focus the input when the SVG is clicked
    if (inputRefFrom.current) {
      inputRefFrom.current.focus();
    }
  };
  const handleSvgClickTo = () => {
    // Focus the input when the SVG is clicked
    if (inputRefTo.current) {
      inputRefTo.current.focus();
    }
  };

  const isToastShown = useRef(false);
  const sellerInfo = getAuthUser();
  useEffect(() => {
    const isVerified = sellerInfo?.store?.is_verified;
    if (!isVerified) {
      router.push('/');
      if (!isToastShown.current) {
        isToastShown.current = true;
        toast.custom((t) => (
          <AlertToast
            message={!sellerInfo?.store ? "First you need to create a store !" : "Your store is not verified !"}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }, [sellerInfo, router]);
  return (
    <main id="content">
      <div className="inner-content">
        <section className="page-top-section">
          <div className="page-top-section-inner">
            <form className="search-form" onSubmit={handleSubmit}>
              <label for="search-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>

              <input
                className="page-search-input"
                type="text"
                name=""
                id="search-input"
                placeholder="Search"
              />
            </form>

            <a href="./notification.html" className="notification-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.25022 9C5.25022 7.20979 5.96138 5.4929 7.22725 4.22703C8.49312 2.96116 10.21 2.25 12.0002 2.25C13.7904 2.25 15.5073 2.96116 16.7732 4.22703C18.0391 5.4929 18.7502 7.20979 18.7502 9V9.75C18.7502 11.873 19.5502 13.807 20.8682 15.27C20.9503 15.361 21.0089 15.4707 21.0388 15.5896C21.0686 15.7084 21.0689 15.8328 21.0396 15.9518C21.0103 16.0708 20.9523 16.1808 20.8707 16.2722C20.789 16.3636 20.6862 16.4335 20.5712 16.476C19.0272 17.046 17.4112 17.466 15.7402 17.719C15.7778 18.2331 15.7091 18.7495 15.5381 19.2359C15.3672 19.7222 15.0979 20.1681 14.7469 20.5457C14.396 20.9233 13.9709 21.2245 13.4983 21.4304C13.0257 21.6364 12.5157 21.7427 12.0002 21.7427C11.4847 21.7427 10.9747 21.6364 10.5021 21.4304C10.0295 21.2245 9.60448 20.9233 9.25351 20.5457C8.90254 20.1681 8.63319 19.7222 8.46229 19.2359C8.29138 18.7495 8.22259 18.2331 8.26022 17.719C6.61187 17.4692 4.99321 17.0524 3.42922 16.475C3.31435 16.4326 3.21161 16.3627 3.12998 16.2715C3.04834 16.1802 2.99029 16.0703 2.9609 15.9515C2.9315 15.8326 2.93166 15.7084 2.96135 15.5896C2.99103 15.4708 3.04936 15.3611 3.13122 15.27C4.49802 13.7567 5.2533 11.7892 5.25022 9.75V9ZM9.75222 17.9C9.73942 18.2032 9.7881 18.5058 9.8953 18.7897C10.0025 19.0736 10.166 19.3329 10.376 19.5519C10.586 19.771 10.8382 19.9453 11.1173 20.0644C11.3964 20.1835 11.6968 20.2448 12.0002 20.2448C12.3037 20.2448 12.604 20.1835 12.8831 20.0644C13.1622 19.9453 13.4144 19.771 13.6244 19.5519C13.8344 19.3329 13.9979 19.0736 14.1051 18.7897C14.2123 18.5058 14.261 18.2032 14.2482 17.9C12.7526 18.0347 11.2479 18.0347 9.75222 17.9Z"
                  fill="#7B7F95"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className="order-management-section">
          <div className="order-management-section-inner">
            <div className="order-management-header">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h1 className="title">Add Voucher</h1>
                  <p className="details mt-1">
                    Make Changes and publish for review
                  </p>
                </div>

                <div className="d-flex align-items-center gap-3">
                  {/* <a href="" className="add-product-btn"></a> */}
                  <button
                    className="add-product-btn btn"
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <span>Publishing...</span>
                    ) : (
                      <span>Publish</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="add-voucher-section">
          <div className="add-voucher-section-inner">
            <div className="row g-4">
              <div className="col-xl-8">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="generate-random-code-section">
                      {/* <div className="random-code-inner">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="input-title">Code <span className="text-danger">*</span></p>
                          <p className="color-text">Generate random code</p>
                        </div>
                        <input className="input-field" type="text" name="" id=""
                          placeholder="Enter code, No special Sign or spaces"/>
                        <p className="light-text">Customer must enter this code at the checkout</p>
                      </div> */}

                      <div className="voucher-type-inner">
                        <p className="input-title">
                          Voucher Type <span className="text-danger">*</span>
                        </p>
                        <div className="row g-3">
                          {voucherCreationData?.voucherTypes?.map(type => (
                            <div className="col-6 col-sm-3" key={type.id}>
                              <div className="radio-button-inner">
                                <label className="radio-button-container">
                                  {type.name}
                                  <input
                                    type="radio"
                                    name="voucherType"
                                    value={type.id}
                                    checked={formData.voucherType === type.id}
                                    onChange={handleChange}
                                  />{' '}
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </div>
                          ))}
                          {errors.voucherType && (
                            <p className="text-danger small">
                              {errors.voucherType}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-12">
                            {!categoryShow && !productShow && (
                              <div className="box">
                                <label className="category-select-label">
                                  {' '}
                                  Exclude Category{' '}
                                </label>
                                <Select
                                  className="wide selectize"
                                  isMulti
                                  components={animatedComponents}
                                  options={categoryOptions}
                                  name="excludeCategoryIds"
                                  placeholder="Select Categories"
                                  onChange={selectedOptions =>
                                    handleMultiSelectChange(
                                      selectedOptions,
                                      'excludeCategoryIds'
                                    )
                                  }
                                />
                              </div>
                            )}
                            {categoryShow && (
                              <div className="box">
                                <label className="category-select-label">
                                  {' '}
                                  Category{' '}
                                </label>
                                <Select
                                  className="wide selectize"
                                  isMulti
                                  components={animatedComponents}
                                  options={categoryOptions}
                                  name="categoriesIds"
                                  placeholder="Select Categories"
                                  onChange={selectedOptions =>
                                    handleMultiSelectChange(
                                      selectedOptions,
                                      'categoriesIds'
                                    )
                                  }
                                />
                              </div>
                            )}
                          </div>

                          <div className="col-12">
                            {!brandShow && !productShow && (
                              <div className="box">
                                <label className="category-select-label">
                                  Exclude Brand
                                </label>
                                <Select
                                  className="wide selectize"
                                  isMulti
                                  components={animatedComponents}
                                  options={brandOptions}
                                  placeholder="Select Brands"
                                  name="excludeBrandIds"
                                  onChange={selectedOptions =>
                                    handleMultiSelectChange(
                                      selectedOptions,
                                      'excludeBrandIds'
                                    )
                                  }
                                />
                              </div>
                            )}
                            {brandShow && (
                              <div className="box">
                                <label className="category-select-label">
                                  Brand
                                </label>
                                <Select
                                  className="wide selectize"
                                  isMulti
                                  components={animatedComponents}
                                  options={brandOptions}
                                  placeholder="Select Brands"
                                  name="brandIds"
                                  onChange={selectedOptions =>
                                    handleMultiSelectChange(
                                      selectedOptions,
                                      'brandIds'
                                    )
                                  }
                                />
                              </div>
                            )}
                          </div>

                          <div className="col-12">
                            {!productShow && (
                              <div className="box">
                                <label className="category-select-label">
                                  Exclude Product
                                </label>
                                <Select
                                  className="wide selectize"
                                  isMulti
                                  components={animatedComponents}
                                  options={productOptions}
                                  placeholder="Select Products"
                                  name="excludeProductIds"
                                  onChange={selectedOptions =>
                                    handleMultiSelectChange(
                                      selectedOptions,
                                      'excludeProductIds'
                                    )
                                  }
                                />
                              </div>
                            )}
                          </div>

                          {productShow && (
                            <div className="col-12">
                              <div className="box">
                                <label className="category-select-label">
                                  Product
                                </label>
                                <Select
                                  className="wide selectize"
                                  isMulti
                                  components={animatedComponents}
                                  options={productOptions}
                                  placeholder="Select Products"
                                  name="productIds"
                                  onChange={selectedOptions =>
                                    handleMultiSelectChange(
                                      selectedOptions,
                                      'productIds'
                                    )
                                  }
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-6">
                            <div className="box">
                              <label className="category-select-label">
                                Discount Type{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <Select
                                className="wide selectize"
                                components={animatedComponents}
                                defaultValue={[
                                  { value: 'fixed', label: 'Fixed' },
                                ]}
                                options={[{ value: 'fixed', label: 'Fixed' }]}
                                placeholder="Select Type"
                                name="discountType"
                                onChange={handleChange}
                              />{' '}
                              {errors.discountType && (
                                <p className="text-danger small">
                                  {errors.discountType}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="box">
                              <label className="category-select-label">
                                Discount Value{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="input-field"
                                type="number"
                                name="discountValue"
                                id=""
                                required
                                min="0"
                                onInput={e => {
                                  if (e.target.value < 0) {
                                    e.target.value = 0;
                                  }
                                }}
                                placeholder="Enter discount value"
                                onChange={handleChange}
                              />{' '}
                              {errors.discountValue && (
                                <p className="text-danger small">
                                  {errors.discountValue}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-6 col-sm-6">
                            <div className="box">
                              <label className="category-select-label">
                                Minimum Purchase{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="input-field"
                                type="number"
                                name="minimumPurchaseAmount"
                                id=""
                                min="0"
                                onInput={e => {
                                  if (e.target.value < 0) {
                                    e.target.value = 0;
                                  }
                                }}
                                placeholder="Enter minimum purchase amount"
                                onChange={handleChange}
                              />{' '}
                              {errors.minimumPurchaseAmount && (
                                <p className="text-danger small">
                                  {errors.minimumPurchaseAmount}
                                </p>
                              )}
                            </div>
                          </div>
                          {/* 
                          <div className="col-6 col-sm-4">
                            <div className="box">
                              <label className="category-select-label">
                                Maximum Discount
                              </label>
                              <input
                                className="input-field"
                                type="number"
                                name="maximumDiscountAmount"
                                id=""
                                placeholder="0"
                              />
                            </div>
                          </div> */}

                          <div className="col-6 col-sm-6">
                            <div className="box">
                              <label className="category-select-label">
                                Usage limit
                              </label>
                              <input
                                className="input-field"
                                type="number"
                                name="usageLimit"
                                id=""
                                min="0"
                                onInput={e => {
                                  if (e.target.value < 0) {
                                    e.target.value = 0;
                                  }
                                }}
                                placeholder="Enter usage limit"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="exclude-category">
                        <div className="row g-3">
                          <div className="col-6">
                            <div className="box">
                              <label
                                className="category-select-label"
                                for="validFrom"
                              >
                                Start Date{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <div className="date-input">
                                <svg
                                  onClick={handleSvgClickFrom}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.75272 2.69754 5.27581 3.04917 4.92417C3.40081 4.57254 3.87772 4.375 4.375 4.375H15.625C16.1223 4.375 16.5992 4.57254 16.9508 4.92417C17.3025 5.27581 17.5 5.75272 17.5 6.25V15.625M2.5 15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625M2.5 15.625V9.375C2.5 8.87772 2.69754 8.40081 3.04917 8.04917C3.40081 7.69754 3.87772 7.5 4.375 7.5H15.625C16.1223 7.5 16.5992 7.69754 16.9508 8.04917C17.3025 8.40081 17.5 8.87772 17.5 9.375V15.625"
                                    stroke="#7B7F95"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <input
                                  type="text"
                                  id="start-date"
                                  name="validFrom"
                                  ref={inputRefFrom}
                                  placeholder="DD/MM/YYYY"
                                  onFocus={e => (e.target.type = 'date')}
                                  onBlur={e => (e.target.type = 'text')}
                                  onChange={handleChange}
                                />{' '}
                              </div>
                              {errors.validFrom && (
                                <p className="text-danger small">
                                  {errors.validFrom}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="box">
                              <label
                                className="category-select-label"
                                for="validTo"
                              >
                                End Date <span className="text-danger">*</span>
                              </label>
                              <div className="date-input">
                                <svg
                                  onClick={handleSvgClickTo}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M5.625 2.5V4.375M14.375 2.5V4.375M2.5 15.625V6.25C2.5 5.75272 2.69754 5.27581 3.04917 4.92417C3.40081 4.57254 3.87772 4.375 4.375 4.375H15.625C16.1223 4.375 16.5992 4.57254 16.9508 4.92417C17.3025 5.27581 17.5 5.75272 17.5 6.25V15.625M2.5 15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625M2.5 15.625V9.375C2.5 8.87772 2.69754 8.40081 3.04917 8.04917C3.40081 7.69754 3.87772 7.5 4.375 7.5H15.625C16.1223 7.5 16.5992 7.69754 16.9508 8.04917C17.3025 8.40081 17.5 8.87772 17.5 9.375V15.625"
                                    stroke="#7B7F95"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <input
                                  type="text"
                                  name="validTo"
                                  id="validTo"
                                  ref={inputRefTo}
                                  placeholder="DD/MM/YYYY"
                                  onChange={handleChange}
                                  onFocus={e => (e.target.type = 'date')}
                                  onBlur={e => (e.target.type = 'text')}
                                />{' '}
                              </div>
                              {errors.validTo && (
                                <p className="text-danger small">
                                  {errors.validTo}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="d-flex align-items-center gap-3">
                              <label className="switch">
                                <span className="close-btn">
                                  <svg
                                    xmlns="http:www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                  >
                                    <path
                                      d="M7.5 2.5L2.5 7.5"
                                      stroke="white"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M2.5 2.5L7.5 7.5"
                                      stroke="white"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                                <input
                                  type="checkbox"
                                  name="isActive"
                                  checked={formData.isActive}
                                  onChange={handleChange}
                                />
                                <span className="slider round"></span>
                              </label>
                              <p className="text">is active</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-sm-5"></div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="row g-3">
                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="right-section">
                        <div className="d-flex justify-content-between align-items-center">
                          <h1 className="title">Status</h1>
                          {/* <span className="draft-btn">Draft</span> */}
                          {formData.isActive ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">Inactive</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="generate-random-code-section">
                      <div className="right-section">
                        <div className="d-flex flex-column gap-4">
                          <div className="d-flex flex-column gap-3">
                            <h1 className="title">Summary</h1>
                            {/* <h1 className="title text-uppercase">
                              FREESHIPPING26
                            </h1> */}
                          </div>

                          <div className="">
                            <p className="text">Type & Method</p>
                            <ul className="mt-1">
                              <li className="light-text">Fixed</li>
                            </ul>
                          </div>

                          <div className="">
                            <p className="text">Details</p>
                            <ul className="mt-1">
                              <li className="light-text">
                                Discount Value {formData.discountValue}
                              </li>
                              <li className="light-text">
                                Minimum Purchase{' '}
                                {formData.minimumPurchaseAmount}
                              </li>
                              <li className="light-text">
                                Usage limit {formData.usageLimit}
                              </li>
                              <li className="light-text">
                                Valid {formData.validFrom} To {formData.validTo}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5 mb-sm-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
