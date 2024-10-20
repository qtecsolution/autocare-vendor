'use client'
import React, { useEffect, useState } from 'react'
import BankInfoNotFound from './BankInfoNotFound';
import axiosInstance from '@/lib/axiosInstance';
import Select from 'react-select';
import toast from 'react-hot-toast';
import AlertToast from '@/components/toast/AlertToast';
import SuccessToast from '@/components/toast/Success';
import { useRouter } from 'next/navigation';

function BankInfoPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [bankDetails, setBankDetails] = useState('');
  const [bdBanksInfo, setBdBanksInfo] = useState([]);
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isPrimary, setIsPrimary] = useState(true);
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branches, setBranches] = useState([]);
  const initialErrors = {
    accountHolderName: '',
    accountNumber: '',
    selectedBank: '',
    selectedBranch: '',
  };
  const [errors, setErrors] = useState(initialErrors);

  const validateForm = () => {
    const newErrors = {};

    if (!accountHolderName) newErrors.accountHolderName = 'Account Holder Name is Required';
    if (!accountNumber) newErrors.accountNumber = 'Account Number is Required';
    if (!selectedBank) newErrors.selectedBank = 'Bank is Required';
    if (!selectedBranch) newErrors.selectedBranch = 'Branch is Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };
  const getBankDetails = async () => {
    try {
      const response = await axiosInstance.get('/seller-panel-api/frontend/seller-bank-account/');
      setBankDetails(response?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getBDBanksInfo = async () => {
      try {
        const response = await axiosInstance.get('/seller-panel-api/frontend/bd-bank-list/');
        setBdBanksInfo(response?.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBankDetails();
    getBDBanksInfo();
  }, [])

  const handleBankChange = (selectedOption) => {
    setSelectedBank(selectedOption);
    setBranches(selectedOption?.branches || []);
    setSelectedBranch(null);
  };

  const handleBranchChange = (selectedOption) => {
    setSelectedBranch(selectedOption);
  };

  const handleIsPrimary = () => {
    setIsPrimary(!isPrimary);
  };

  const handleFirstStep = () => {
    setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await axiosInstance.post('/seller-panel-api/frontend/seller-bank-account/', {
          accountHolderName: accountHolderName,
          accountNumber: accountNumber,
          bankId: selectedBank?.value,
          branchId: selectedBranch?.value,
          isPrimary: isPrimary,
        })

        toast.custom((t) => (
          <SuccessToast
            message={response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
        router.refresh();
        getBankDetails();
        setStep(1);

        setAccountHolderName('');
        setAccountNumber('');
        setIsPrimary(false);
        setSelectedBank(null);
        setSelectedBranch(null);

      } catch (error) {
        toast.custom((t) => (
          <AlertToast
            message={error.response.data.message}
            dismiss={() => toast.dismiss(t.id)}
          />
        ));
      }
    }
  }

  const backBankList = () => {
    setStep(1);
    getBankDetails();
  }

  const makePrimaryAccount = async (b_ac_id) => {
    try {
      const response = await axiosInstance.patch(`/seller-panel-api/frontend/seller-bank-account/${b_ac_id}/make-primary/`);
      toast.custom((t) => (
        <SuccessToast
          message={response.data.message}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
      getBankDetails();
    } catch (error) {
      toast.custom((t) => (
        <AlertToast
          message={error.response.data.message}
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    }
  }

  return (
    <>
      <div className="d-flex flex-column gap-4">
        {step === 1 &&
          <>
            {bankDetails?.bank_accounts?.length > 0 ?
              <div className="profile-section">
                <div className="profile-section-inner">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="d-flex flex-column gap-3 bankInformation-list">
                        <div className="bankInformation-list-item d-flex flex-column gap-3">
                          {bankDetails?.bank_accounts?.map((bank) => (
                            <div className="bankInformation-list-item-inner border-bottom pb-2">
                              <div className="row">
                                <div className="col-6">
                                  <div className="d-flex flex-column gap-1">
                                    <h3 className="title">{bank?.bank?.name}</h3>
                                    <p className="paragraph">{bank?.account_holder_name}</p>
                                    <p className="paragraph">{bank?.account_number}</p>
                                    <p className="paragraph">{bank?.branch?.name}</p>
                                  </div>
                                </div>

                                {bank?.is_primary ? <div className="col-6">
                                  <button className="primary-bankInformation text-success">
                                    Primary
                                  </button>
                                </div> :
                                  <div className="col-6">
                                    <button className="primary-bankInformation" onClick={() => makePrimaryAccount(bank?.id)}>
                                      Make It Primary
                                    </button>
                                  </div>
                                }
                              </div>
                            </div>
                          ))}
                          <div className="">
                            <button className="new-campaign-btn px-5" onClick={handleFirstStep}>
                              <span>
                                + Add Bank
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : <BankInfoNotFound setStep={setStep} />
            }</>
        }

        {step === 2 &&
          <div className="profile-section">
            <div className="profile-section-inner">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="d-flex flex-column gap-3">
                    <div className="input-inner">
                      <div className="label-inner">
                        <label for="accountType" className="input-label">
                          Account Holder's Name <span className='text-danger'>*</span>
                        </label>
                      </div>

                      <input className="input-field" type="text" name="" id="accountType"
                        placeholder="Write here" value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)} />
                    </div>
                    {errors.accountHolderName && <div className="error-message text-danger"><small>{errors.accountHolderName}</small></div>}

                    <div className="input-inner">
                      <div className="label-inner">
                        <label for="account_number" className="input-label">
                          Account Number <span className='text-danger'>*</span>
                        </label>
                      </div>

                      <input className="input-field" type="number"
                        name="" id="account_number" placeholder="Write here" min={0} value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)} />
                    </div>
                    {errors.accountNumber && <div className="error-message text-danger"><small>{errors.accountNumber}</small></div>}

                    {/* Bank Selection */}
                    <div className="input-inner">
                      <div className="label-inner">
                        <label htmlFor="bank" className="input-label">
                          Your Bank  <span className='text-danger'>*</span>
                        </label>
                      </div>
                      <Select
                        name="banks"
                        options={bdBanksInfo?.bank_list?.map((bank) => ({
                          value: bank.id,
                          label: bank.name,
                          branches: bank.branches, // Pass the branches for each bank
                        }))}
                        placeholder="Select Bank"
                        value={selectedBank} // Current selected bank
                        onChange={handleBankChange} // Handle bank selection
                      />
                    </div>
                    {errors.selectedBank && <div className="error-message text-danger"><small>{errors.selectedBank}</small></div>}

                    {/* Branch Selection */}
                    <div className="input-inner">
                      <div className="label-inner">
                        <label htmlFor="branch" className="input-label">
                          Branch  <span className='text-danger'>*</span>
                        </label>
                      </div>
                      <Select
                        name="branches"
                        options={branches.map((branch) => ({
                          value: branch.id,
                          label: branch.name,
                        }))}
                        placeholder="Select Branch"
                        value={selectedBranch} // Current selected branch
                        onChange={handleBranchChange} // Handle branch selection
                        isDisabled={!selectedBank} // Disable if no bank is selected
                      />
                    </div>
                    {errors.selectedBranch && <div className="error-message text-danger"><small>{errors.selectedBranch}</small></div>}

                    <div className="d-flex align-items-center gap-3">
                      <label className="switch">
                        <span className="close-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                            fill="none">
                            <path d="M7.5 2.5L2.5 7.5" stroke="white" stroke-linecap="round"
                              stroke-linejoin="round" />
                            <path d="M2.5 2.5L7.5 7.5" stroke="white" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </span>
                        <input type="checkbox" checked={isPrimary} onChange={handleIsPrimary} />
                        <span className="slider round"></span>
                      </label>
                      <p className="Primary-active-text">Is Primary</p>
                    </div>
                    <div>
                      <button className='new-campaign-btn px-5' onClick={handleSubmit}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {step === 3 &&
          <div className="profile-section">
            <div className="profile-section-inner">
              <div className="row g-4">
                <div className="col-12">
                  <div
                    className="d-flex flex-column justify-content-center align-items-center gap-3 bankInformation-notFound">
                    <figure className="notfound-img">
                      <img src="./assets/images/Bank-Added-icon.png" alt="" />
                    </figure>
                    <h2 className="title">Bank Added</h2>
                    <p className="paragraph">
                      You have successfully added your bank to Autocare vendor panel.
                    </p>
                    <span onClick={backBankList} style={{ cursor: 'pointer', fontWeight: 'bold' }}>Go to Bank List</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className='mb-5'>
      </div>
    </>
  )
}

export default BankInfoPage