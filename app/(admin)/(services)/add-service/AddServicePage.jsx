'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import GlobalSearch from '@/components/admin/GlobalSearch'
import CustomQuillEditor from '@/components/admin/CustomQuill';
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import axiosInstance from '@/lib/axiosInstance';
import { getAuthUser } from '@/utils/auth';

function AddServicePage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [serviceName, setServiceName] = useState('');
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [servicingTypes, setServicingTypes] = useState([]);
    const [selectedServicingTypes, setSelectedServicingTypes] = useState([]);
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);
    const [vehicleEngine, setVehicleEngine] = useState([]);
    const [selectedVehicleEngine, setSelectedVehicleEngine] = useState([]);
    const [compatibleBrands, setCompatibleBrands] = useState([]);
    const [selectedCompatibleBrands, setSelectedCompatibleBrands] = useState([]);
    // const [images, setImages] = useState([]);
    // const [viewImages, setViewImages] = useState([]);
    const [mainImage, setMainImage] = useState(null)
    const [mainImagePreview, setMainImagePreview] = useState(null);
    const [mainDesc, setMainDesc] = useState('');
    const [compatibility, setCompatibility] = useState('');
    const [price, setPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    // const [isActive, setIsActive] = useState(false);

    const isToastShown = useRef(false);
    const sellerInfo = getAuthUser();
    useEffect(() => {
        const businessType = sellerInfo?.business_type?.name;
        if (businessType === "Product") {
            router.push('/');
        }
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

    const stores = [
        { value: sellerInfo?.store?.id, label: sellerInfo?.store?.name },
    ]

    const initialErrors = {
        name: '',
        category: '',
        main_image: '',
        // images: '',
        price: '',
    };
    const [errors, setErrors] = useState(initialErrors);

    const validateForm = () => {
        const newErrors = {};

        if (!serviceName) newErrors.name = 'Service name is required';
        if (!selectedCategory) newErrors.category = 'Category is required';
        if (!mainImage) newErrors.main_image = 'Service image is required';
        // if (images.length === 0) newErrors.images = 'At least one service image is required';
        if (!price || isNaN(price)) newErrors.price = 'Valid price is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;

    };

    useEffect(() => {
        const fetchServiceData = async () => {
            try {
                const response = await axiosInstance.get('/seller-panel-api/frontend/service-all-data/');
                setCategories(response.data.categories);
                setCompatibleBrands(response.data.brands);
                setVehicleTypes(response.data.vehicle_types);
                setVehicleEngine(response.data.vehicle_engines);
                setServicingTypes(response.data.servicing_types);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchServiceData();
    }, []);

    // const handleIsActive = () => {
    //     setIsActive(!isActive)
    // };

    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
        if (selectedOption) {
            const subCats = selectedOption.children.map((subCategory) => ({
                value: subCategory.id,
                label: subCategory.name,
                children: subCategory.children,
            }));
            setSubCategories(subCats);
            setSelectedSubCategories([]);
        } else {
            setSubCategories([]);
        }
    };

    const handleSubCategoryChange = (selectedOptions) => {
        setSelectedSubCategories(selectedOptions);
    };

    const handleBrandChange = (selectedOptions) => {
        setSelectedCompatibleBrands(selectedOptions);
    };
    const handleVehicleTypeChange = (selectedOptions) => {
        setSelectedVehicleTypes(selectedOptions);
    };
    const handleVehicleEngineChange = (selectedOptions) => {
        setSelectedVehicleEngine(selectedOptions);
    };
    const handleServicingTypesChange = (selectedOptions) => {
        setSelectedServicingTypes(selectedOptions);
    };

    // const handleImageUpload = (e) => {
    //     const files = Array.from(e.target.files);
    //     if (images.length + files.length > 4) {
    //         toast.custom((t) => (
    //             <AlertToast
    //                 message="You can upload a maximum of 4 images!"
    //                 dismiss={() => toast.dismiss(t.id)}
    //             />
    //         ));
    //         return;
    //     }

    //     // To track valid images
    //     const validFiles = [];
    //     const newViewImages = [];

    //     files.forEach((file) => {
    //         const img = new Image();
    //         img.src = URL.createObjectURL(file);
    //         img.onload = () => {
    //             const { width, height } = img;
    //             if (width === height) {
    //                 validFiles.push(file);
    //                 newViewImages.push(img.src);

    //                 // Check if all files are processed before updating state
    //                 if (validFiles.length === files.length) {
    //                     setImages((prevImages) => [...prevImages, ...validFiles]);
    //                     setViewImages((prevImages) => [...prevImages, ...newViewImages]);
    //                 }
    //             } else {
    //                 toast.custom((t) => (
    //                     <AlertToast
    //                         message="Image must have a 1:1 aspect ratio."
    //                         dismiss={() => toast.dismiss(t.id)}
    //                     />
    //                 ));
    //             }
    //         };
    //     });
    // };

    // const handleImageRemove = (index) => {
    //     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    //     setViewImages((prevImages) => prevImages.filter((_, i) => i !== index));
    // };

    const handleMainImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const { width, height } = img;
                if (width === height) {
                    // Valid 1:1 ratio, update thumbnail
                    setMainImage(file);
                } else {
                    // Show an error message if the image ratio is not 1:1
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

    useEffect(() => {
        if (mainImage) {
            const objectUrl = URL.createObjectURL(mainImage);
            setMainImagePreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [mainImage]);

    const removeMainImage = (e) => {
        e.preventDefault();
        setMainImage(null);
        setMainImagePreview(null);
    };
    const text_max_len = 100;
    const handleServiceName = (e) => {
        if (e.target.value.length <= text_max_len) {
            setServiceName(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {

            const formData = new FormData();

            formData.append('serviceName', serviceName);
            formData.append('categoryId', selectedCategory?.value);

            const subCategoryIds = selectedSubCategories.map(cat => cat.value);
            formData.append('subCategoryIds', JSON.stringify(subCategoryIds));

            const servicingTypeIds = selectedServicingTypes.map(item => item.value);
            formData.append('servicingTypeIds', JSON.stringify(servicingTypeIds));

            const vehicleTypeIds = selectedVehicleTypes.map(item => item.value);
            formData.append('vehicleTypeIds', JSON.stringify(vehicleTypeIds));

            const vehicleEngineIds = selectedVehicleEngine.map(item => item.value);
            formData.append('vehicleEngineIds', JSON.stringify(vehicleEngineIds));

            const compatibleBrandIds = selectedCompatibleBrands.map(item => item.value);
            formData.append('brandIds', JSON.stringify(compatibleBrandIds));

            if (mainImage) {
                formData.append('image', mainImage);
            }

            formData.append('startFrom', price);

            if (maxPrice) {
                formData.append('maximumPrice', maxPrice);
            }

            formData.append('description', mainDesc);
            formData.append('compatability', compatibility);
            // formData.append('isActive', isActive);

            try {
                const response = await axiosInstance.post('/seller-panel-api/frontend/service/create/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });

                toast.custom((t) => (
                    <SuccessToast
                        message={response.data.message}
                        dismiss={() => toast.dismiss(t.id)}
                    />
                ));
                router.refresh();
                setStep(2);

                setServiceName('');
                setErrors(initialErrors);
                setSubCategories([]);
                setSelectedCategory(null);
                setSelectedSubCategories([]);
                setSelectedCompatibleBrands([]);
                setSelectedVehicleTypes([]);
                setSelectedServicingTypes([]);
                setSelectedVehicleEngine([]);
                // setImages([]);
                // setViewImages([]);
                setMainImage(null)
                setMainImagePreview(null);
                setMainDesc('');
                setCompatibility('');
                setPrice(null);
                setMaxPrice(null);
                // setIsActive(false);

            } catch (error) {
                console.error('Error:', error);
                toast.custom((t) => (
                    <AlertToast
                        message={error.response.data.message}
                        dismiss={() => toast.dismiss(t.id)}
                    />
                ));
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };
    return (
        <>
            {
                step === 1 &&
                <div id="content">
                    <div className="inner-content">
                        <GlobalSearch />
                    </div>
                    <div className="d-flex flex-column h-100">
                        <div className="flex-grow-1">
                            <div className="page-header">
                                <div className="d-flex flex-column gap-1">
                                    <h1 className="page-title">
                                        Add Service
                                    </h1>
                                    <p className="page-text">
                                        Seamlessly Add and Manage Your Services
                                    </p>
                                </div>
                            </div>

                            <div className="add-product-content">
                                <div className="add-product-body">

                                    <div className="d-flex flex-column gap-2">
                                        <div className="input-field-name">
                                            <label for="product-name"> Service Name <span>*</span></label>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-field">
                                                    <input type="text" name="product-name" id="product-name"
                                                        placeholder="Ex. Sony a6400 mirrorless camera" value={serviceName} onChange={handleServiceName} />
                                                    <p className="text">{serviceName.length}/{text_max_len}</p>
                                                </div>
                                                {errors.name && <div className="error-message text-danger"><small>{errors.name}</small></div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <label className="category-select-label">Store <span className='text-danger'>*</span></label>
                                        <Select
                                            name="store"
                                            defaultValue={stores[0]}
                                            options={stores}
                                            // placeholder="Select Servicing Type"
                                            // onChange={}
                                            // value={}
                                            isDisabled={true}
                                        />
                                    </div>
                                    <div className="category-select">
                                        <div className="box">
                                            <label className="category-select-label">Select Category <span>*</span></label>
                                            <Select
                                                name="category"
                                                options={categories.map((category) => ({
                                                    value: category.id,
                                                    label: category.name,
                                                    children: category.children,
                                                }))}
                                                placeholder="Select Category"
                                                onChange={handleCategoryChange}
                                                value={selectedCategory}
                                            />
                                            {errors.category && <div className="error-message text-danger"><small>{errors.category}</small></div>}
                                        </div>

                                        <div className="box">
                                            <label className="category-select-label">Sub - Category</label>
                                            <Select
                                                isMulti
                                                name="subcategory"
                                                options={subCategories}
                                                placeholder="Select Sub Category"
                                                onChange={handleSubCategoryChange}
                                                value={selectedSubCategories}
                                                isDisabled={!subCategories.length} // Disable if no subcategories
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="add-product-body">
                                    <div className="box">
                                        <label className="category-select-label">Servicing Type</label>
                                        <Select
                                            isMulti
                                            name="servicing_type"
                                            options={servicingTypes.map((service_type) => ({
                                                value: service_type.id,
                                                label: service_type.name,
                                            }))}
                                            placeholder="Select Servicing Type"
                                            onChange={handleServicingTypesChange}
                                            value={selectedServicingTypes}
                                        />
                                    </div>

                                    <div className="box">
                                        <label className="category-select-label">Vehicle Type</label>
                                        <Select
                                            isMulti
                                            name="vehicle_type"
                                            options={vehicleTypes.map((vehicle_type) => ({
                                                value: vehicle_type.id,
                                                label: vehicle_type.name,
                                            }))}
                                            placeholder="Select Vehicle Type"
                                            onChange={handleVehicleTypeChange}
                                            value={selectedVehicleTypes}
                                        />
                                    </div>

                                    <div className="box">
                                        <label className="category-select-label">Vehicle Engine</label>
                                        <Select
                                            isMulti
                                            name="vehicle_engine"
                                            options={vehicleEngine.map((vehicle_engine) => ({
                                                value: vehicle_engine.id,
                                                label: vehicle_engine.name,
                                            }))}
                                            placeholder="Select Vehicle Engine"
                                            onChange={handleVehicleEngineChange}
                                            value={selectedVehicleEngine}
                                        />
                                    </div>

                                    <div className="box">
                                        <label className="category-select-label">Brand</label>
                                        <Select
                                            isMulti
                                            name="brand"
                                            options={compatibleBrands.map((brand) => ({
                                                value: brand.id,
                                                label: brand.name,
                                            }))}
                                            placeholder="Select Brand"
                                            onChange={handleBrandChange}
                                            value={selectedCompatibleBrands}
                                        />
                                    </div>
                                </div>

                                <div className="product-image-section">
                                    <div className="product-img-head">
                                        <div className="d-flex align-items-center gap-1">
                                            <h1 className="title">Service Image <span>*</span> </h1>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M9.375 9.37476L9.40917 9.35809C9.51602 9.3047 9.63594 9.28306 9.75472 9.29572C9.8735 9.30838 9.98616 9.35481 10.0794 9.42951C10.1726 9.50422 10.2424 9.60407 10.2806 9.71724C10.3189 9.83042 10.3238 9.95217 10.295 10.0681L9.705 12.4314C9.67595 12.5474 9.68078 12.6693 9.71891 12.7826C9.75704 12.8959 9.82687 12.9959 9.92011 13.0707C10.0134 13.1455 10.1261 13.1921 10.245 13.2047C10.3639 13.2174 10.4839 13.1957 10.5908 13.1423L10.625 13.1248M17.5 9.99976C17.5 10.9847 17.306 11.9599 16.9291 12.8699C16.5522 13.7798 15.9997 14.6066 15.3033 15.3031C14.6069 15.9995 13.7801 16.5519 12.8701 16.9289C11.9602 17.3058 10.9849 17.4998 10 17.4998C9.01509 17.4998 8.03982 17.3058 7.12987 16.9289C6.21993 16.5519 5.39314 15.9995 4.6967 15.3031C4.00026 14.6066 3.44781 13.7798 3.0709 12.8699C2.69399 11.9599 2.5 10.9847 2.5 9.99976C2.5 8.01063 3.29018 6.10298 4.6967 4.69645C6.10322 3.28993 8.01088 2.49976 10 2.49976C11.9891 2.49976 13.8968 3.28993 15.3033 4.69645C16.7098 6.10298 17.5 8.01063 17.5 9.99976ZM10 6.87476H10.0067V6.88142H10V6.87476Z"
                                                    stroke="#0F766D" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                        <h1 className="example-text">
                                            See Example
                                        </h1>
                                    </div>

                                    <div className="product-img-body">
                                        <div className="uplod-img">
                                            {mainImagePreview &&
                                                <div className="product-img">
                                                    <img src={mainImagePreview} alt="thumbnail" />
                                                    <div className="img-close-btn">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none" onClick={removeMainImage}>
                                                            <g filter="url(#filter0_dd_239_17341)">
                                                                <circle cx="21" cy="19.9995" r="15" fill="white" />
                                                            </g>
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M15.7219 14.7371C15.8354 14.6237 15.9892 14.5601 16.1496 14.5601C16.31 14.5601 16.4639 14.6237 16.5774 14.7371L20.9917 19.1514L25.406 14.7371C25.4614 14.6776 25.5282 14.6299 25.6024 14.5968C25.6767 14.5637 25.7568 14.546 25.8381 14.5445C25.9194 14.5431 26.0001 14.558 26.0754 14.5885C26.1508 14.6189 26.2193 14.6642 26.2767 14.7217C26.3342 14.7792 26.3795 14.8476 26.41 14.923C26.4404 14.9984 26.4554 15.0791 26.4539 15.1604C26.4525 15.2416 26.4347 15.3218 26.4016 15.396C26.3685 15.4703 26.3208 15.5371 26.2614 15.5925L21.8471 20.0068L26.2614 24.4211C26.3208 24.4765 26.3685 24.5433 26.4016 24.6176C26.4347 24.6918 26.4525 24.772 26.4539 24.8532C26.4554 24.9345 26.4404 25.0152 26.41 25.0906C26.3795 25.1659 26.3342 25.2344 26.2767 25.2919C26.2193 25.3494 26.1508 25.3947 26.0754 25.4251C26.0001 25.4555 25.9194 25.4705 25.8381 25.4691C25.7568 25.4676 25.6767 25.4498 25.6024 25.4168C25.5282 25.3837 25.4614 25.336 25.406 25.2765L20.9917 20.8622L16.5774 25.2765C16.4626 25.3834 16.3109 25.4416 16.1541 25.4389C15.9973 25.4361 15.8477 25.3726 15.7368 25.2617C15.6259 25.1508 15.5623 25.0012 15.5596 24.8444C15.5568 24.6876 15.615 24.5358 15.7219 24.4211L20.1362 20.0068L15.7219 15.5925C15.6086 15.479 15.5449 15.3252 15.5449 15.1648C15.5449 15.0044 15.6086 14.8506 15.7219 14.7371Z"
                                                                fill="#525468" />
                                                            <defs>
                                                                <filter id="filter0_dd_239_17341" x="0.545455" y="0.908603" width="40.9091" height="40.9091"
                                                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feMorphology radius="1.36364" operator="dilate" in="SourceAlpha"
                                                                        result="effect1_dropShadow_239_17341" />
                                                                    <feOffset dy="1.36364" />
                                                                    <feGaussianBlur stdDeviation="2.04545" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239_17341" />
                                                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                    <feOffset dy="1.36364" />
                                                                    <feGaussianBlur stdDeviation="1.36364" />
                                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                                                    <feBlend mode="normal" in2="effect1_dropShadow_239_17341"
                                                                        result="effect2_dropShadow_239_17341" />
                                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_239_17341"
                                                                        result="shape" />
                                                                </filter>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                </div>
                                            }

                                            {mainImage ? ''
                                                :
                                                <div className="add-product-img-inner">
                                                    <label for="product-main-img" className="add-product-img">
                                                        <input className="add-product-img-input" type="file" name="" id="product-main-img" accept='.png,.jpg,.jpeg' onChange={handleMainImage} />
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                            <path d="M15 5.62451V24.3745M24.375 14.9995H5.625" stroke="#0F766D" stroke-width="1.875"
                                                                stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </label>
                                                </div>
                                            }

                                        </div>
                                        <div className="">
                                            <ul className="add-product-img-list">
                                                <li>Image Ratio: 1:1 </li>
                                                <li>Max file size: 1MB.</li>
                                                <li>Format: png, jpg</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {errors.main_image && <div className="error-message text-danger"><small>{errors.main_image}</small></div>}

                                </div>

                            </div>

                            <div className="main-description-section">
                                <div className="main-description-content">

                                    <div className="main-description">
                                        <label for="" className="main-description-label">
                                            Main Description
                                        </label>
                                        <div className="editor-container">
                                            <CustomQuillEditor editorId="editor1" toolbarId="toolbar1" placeholder="Write here for ..."
                                                content={mainDesc}
                                                onContentChange={setMainDesc}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-description-section">
                                <div className="main-description-content">

                                    <div className="main-description">
                                        <label for="" className="main-description-label">
                                            Compatibility
                                        </label>
                                        <div className="editor-container">
                                            <CustomQuillEditor editorId="editor2" toolbarId="toolbar2" placeholder="Write here for ..."
                                                content={compatibility}
                                                onContentChange={setCompatibility}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="price-section">
                                <div className="inner-price-section">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="inner-input">
                                                <label className="label" for="">Price Start Form <span>*</span>
                                                    {/* <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z"
                                                        stroke="#0D9488" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span> */}
                                                </label>
                                                <input className="input" type="number" min={0} name="" id="" placeholder="৳" value={price} onChange={(e) => setPrice(e.target.value)} />
                                                {errors.price && <div className="error-message text-danger"><small>{errors.price}</small></div>}
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="inner-input">
                                                <label className="label" for="">Maximum Price
                                                    {/* <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path
                                                        d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z"
                                                        stroke="#0D9488" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span> */}
                                                </label>
                                                <input className="input" type="number" min={0} name="" id="" placeholder="৳" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="d-flex gap-2 align-items-center">
                                        <label className="switch">
                                            <span className="close-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                                    fill="none">
                                                    <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <input type="checkbox" checked={isActive}
                                                onChange={handleIsActive} />
                                            <span className="slider round"></span>
                                        </label>
                                        <p>Is Active</p>
                                    </div> */}
                                </div>
                            </div>

                        </div>

                        <div className="add-product-footer justify-content-center">
                            <button onClick={handleSubmit} className="confirm-btn active px-5">
                                Save and Publish
                            </button>
                        </div>
                    </div>
                </div>
            }
            {
                step === 2 &&
                <div id="content">
                    <div class="d-flex flex-column h-100">
                        <div class="flex-grow-1 d-flex align-items-center justify-content-center">
                            <div class="congratulation-body">
                                <figure class="img">
                                    <img src="/assets/images/Congratulation.svg" alt="" />
                                </figure>

                                <h2 class="title">
                                    Congratulation!
                                </h2>
                                <p class="details">
                                    Your service has been uploaded for Review. After the authentication we will update this to your garage.
                                </p>

                                <div class="buttons">
                                    <Link href="/service-list" class="manage-btn">
                                        Manage Services
                                    </Link>

                                    <button onClick={() => setStep(1)} class="add-btn">
                                        Add New Service
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default AddServicePage