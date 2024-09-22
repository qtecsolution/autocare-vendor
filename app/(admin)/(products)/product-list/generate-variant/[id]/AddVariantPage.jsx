'use client'
import axiosInstance from '@/lib/axiosInstance';
import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';

function AddVariantPage({ variantData, productId }) {
    const [selectedOptions, setSelectedOptions] = useState([{ id: null, values: [] }]);
    const [attrValues, setAttrValues] = useState({});
    const [productVariantData, setProductVariantData] = useState([]);

    const attributeData = variantData?.attributes;

    const attrOptions = attributeData.map(attr => ({
        value: attr.id,
        label: attr.attribute_name,
    }));

    const handleAttrOptionChange = async (index, option) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index].id = option?.value;

        try {
            const response = await axiosInstance.get(`/seller-panel-api/frontend/get-variants-data/?attributeId=${option?.value}`);
            setAttrValues(prev => ({
                ...prev,
                [index]: response.data.attributeValues,
            }));
            newSelectedOptions[index].values = [];
        } catch (error) {
            console.error(error);
        }

        setSelectedOptions(newSelectedOptions);
    };

    const handleAttrValueChange = (index, selectedValues) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index].values = selectedValues || [];
        setSelectedOptions(newSelectedOptions);
    };

    const addMoreOption = () => {
        if (selectedOptions.length < variantData.attributes.length) {
            setSelectedOptions([...selectedOptions, { id: null, values: [] }]);
        } else {
            toast.custom((t) => (
                <AlertToast
                    message={`You can only add a maximum of ${variantData.attributes.length} options.`}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        }
    };

    // Filter out already selected options
    const availableAttrOptions = attrOptions.filter(option =>
        !selectedOptions.some(selected => selected.id === option.value)
    );

    const generateVariant = async () => {
        const optionsData = selectedOptions.map(option => ({
            optionName: attributeData.find(attr => attr.id === option.id)?.attribute_name || '',
            optionValues: option.values.map(value => value.value), // Assuming value object has a 'value' key
        }));

        try {
            const response = await axiosInstance.post(`/seller-panel-api/frontend/generate-variants/${productId}/`, { options: optionsData });
            toast.custom((t) => (
                <SuccessToast
                    message={response.data.message}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
            setSelectedOptions([{ id: null, values: [] }]);
            setAttrValues({});
        } catch (error) {
            toast.custom((t) => (
                <AlertToast
                    message={error.response.data.message || 'Something Wrong !'}
                    dismiss={() => toast.dismiss(t.id)}
                />
            ));
        }
    };

    useEffect(() => {
        const fetchProductVariantData = async () => {
            try {
                const response = await axiosInstance.get(`/seller-panel-api/frontend/product-variant-list/${productId}/`);
                setProductVariantData(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchProductVariantData();
    }, [])

    const removeOption = (index) => {
        const newSelectedOptions = selectedOptions.filter((_, i) => i !== index);
        const newAttrValues = { ...attrValues };
        delete newAttrValues[index];

        // Re-index attrValues to ensure keys are in sync with new selected options
        Object.keys(newAttrValues).forEach(key => {
            if (key > index) {
                newAttrValues[key - 1] = newAttrValues[key];
                delete newAttrValues[key];
            }
        });

        setSelectedOptions(newSelectedOptions);
        setAttrValues(newAttrValues);
    };

    return (
        <div id="content">
            <div className="inner-content">
                <div className="d-flex flex-column h-100">
                    <div className="flex-grow-1">
                        <section className="variant-section">
                            <div className="variant-section-inner">
                                <div className="row g-4">
                                    {selectedOptions.map((option, index) => (
                                        <React.Fragment key={index}>
                                            <div className="col-md-5" >
                                                <div className="variant-input-inner">
                                                    <div className="variant-label">
                                                        <p className="text">Option Name <span className="text-danger">*</span></p>
                                                    </div>
                                                    <div className="box">
                                                        <Select
                                                            name={`OptionName_${index}`}
                                                            options={availableAttrOptions}
                                                            placeholder="Select Option"
                                                            onChange={(opt) => handleAttrOptionChange(index, opt)}
                                                            value={availableAttrOptions.find(opt => opt.value === option.id)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5" >
                                                <div className="variant-input-inner">
                                                    <div className="variant-label">
                                                        <p className="text">Option Value <span className="text-danger">*</span></p>
                                                    </div>
                                                    <div className="box">
                                                        <Select
                                                            isMulti
                                                            name={`OptionValue_${index}`}
                                                            options={(attrValues[index] || []).map(attrVal => ({
                                                                value: attrVal.id,
                                                                label: attrVal.value,
                                                            }))}
                                                            placeholder="Select Value"
                                                            onChange={(values) => handleAttrValueChange(index, values)}
                                                            value={option.values}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2" >
                                                <div className="variant-input-inner">
                                                    <button class="remove-btn" onClick={() => removeOption(index)} disabled={index === 0 ? true : false}>Remove</button>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                    <div className="col-sm-6">
                                        <div className="d-flex justify-content-center justify-content-sm-end">
                                            <button className="primary-button px-md-5 rounded-3" onClick={addMoreOption}>
                                                + Add More Option
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex justify-content-center justify-content-sm-start">
                                            <button className="primary-button px-md-5 rounded-3" onClick={generateVariant}>
                                                Generate Variant
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="order-details mt-5">
                                <div className="order-details-inner">
                                    <div className="order-management-body-inner">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th className="rating-header">SKU</th>
                                                        <th className="text-center">Add/Edit Image(1:1)</th>
                                                        <th className="text-center">Stock</th>
                                                        <th className="text-center">Selling Price</th>
                                                        <th className="text-center">Variant Value</th>
                                                        <th className="text-center">Default</th>
                                                        <th className="text-center">STATUS</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {productVariantData?.map((variant) => (
                                                        <tr key={variant?.id}>
                                                            <td className="rating-data">
                                                                <p className="pice-text">
                                                                    90000W40
                                                                </p>
                                                            </td>

                                                            <td className="text-center">
                                                                <figure className="d-flex justify-content-center variant-img">
                                                                    <img src="/assets/images/products1.png" alt="variant" />
                                                                </figure>
                                                            </td>

                                                            <td className="rating-data">
                                                                <p className="pice-text text-center">
                                                                    230
                                                                </p>
                                                            </td>

                                                            <td className="rating-data">
                                                                <p className="pice-text text-center">
                                                                    5,000 Tk
                                                                </p>
                                                            </td>

                                                            <td className="rating-data text-center">
                                                                <p className="variant-value">
                                                                    Black | B
                                                                </p>
                                                            </td>

                                                            <td className="rating-data text-center">
                                                                <div className="d-flex justify-content-center align-items-center h-100 w-100">
                                                                    <label className="radio-button-container">
                                                                        <input type="radio" name="radio" />
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </td>

                                                            <td className="rating-data text-center">
                                                                <div className="dropdown">
                                                                    <a className="dropdown-toggle status-btn active" href="#" role="button"
                                                                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Active
                                                                    </a>

                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                        <li><a className="dropdown-item" href="#">Active</a></li>
                                                                        <li><a className="dropdown-item" href="#">Inactive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>


                                                            <td className="text-center">
                                                                <div className="d-flex gap-2 align-items-center justify-content-center">
                                                                    <a href="./edit-verient.html" className="edit-btn">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                                                            fill="none">
                                                                            <path
                                                                                d="M5.99999 10.0001H10.5M1.5 10.0001H2.33727C2.58186 10.0001 2.70416 10.0001 2.81925 9.97248C2.92128 9.94799 3.01883 9.90758 3.1083 9.85275C3.20921 9.79091 3.29569 9.70444 3.46864 9.53148L9.75001 3.25011C10.1642 2.8359 10.1642 2.16433 9.75001 1.75011C9.3358 1.3359 8.66423 1.3359 8.25001 1.75011L1.96863 8.03148C1.79568 8.20444 1.7092 8.29091 1.64736 8.39183C1.59253 8.4813 1.55213 8.57885 1.52763 8.68088C1.5 8.79597 1.5 8.91826 1.5 9.16286V10.0001Z"
                                                                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                    </a>

                                                                    <button className="delete-btn">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                                                            fill="none">
                                                                            <path
                                                                                d="M8 3V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H5.6C5.03995 1 4.75992 1 4.54601 1.10899C4.35785 1.20487 4.20487 1.35785 4.10899 1.54601C4 1.75992 4 2.03995 4 2.6V3M1.5 3H10.5M9.5 3V8.6C9.5 9.44008 9.5 9.86012 9.33651 10.181C9.1927 10.4632 8.96323 10.6927 8.68099 10.8365C8.36012 11 7.94008 11 7.1 11H4.9C4.05992 11 3.63988 11 3.31901 10.8365C3.03677 10.6927 2.8073 10.4632 2.66349 10.181C2.5 9.86012 2.5 9.44008 2.5 8.6V3"
                                                                                stroke="#A7AAB9" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div >
            <div className="add-product-footer justify-content-between">
                <a href="./add-Product.html" className="save-draft-btn active">
                    Save Draft
                </a>

                <a href="./add-Product3.html" className="confirm-btn active">
                    Confirm and Publish
                </a>
            </div>
        </div >
    )
}

export default AddVariantPage