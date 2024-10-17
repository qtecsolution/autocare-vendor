"use client";
import React from "react";
import GlobalSearch from "@/components/admin/GlobalSearch";
import moment from "moment";
import { getAuthUser } from "@/utils/auth";

function DashBoardPage({ dashBoardInfo }) {
  const colorBadge = [
    "flagship-store",
    "top-seller",
    "new-arrival",
    "customer-favorite",
    "fast-shipper",
    "certified-store",
  ];
  const sellerInfo = getAuthUser();
  return (
    <div id="content">
      <div className="main-content">
        <div className="inner-content">
          <GlobalSearch />
        </div>

        {/* <div className="page-header">
          <div className="d-flex flex-column gap-1">
            <h1 className="page-title">
              Welcome back, {sellerInfo?.full_name}
            </h1>
            <p className="page-text">
              Track, manage and forecast your customers and orders.
            </p>
          </div>
        </div> */}

        <div class="inner-content-1">
          <div class="dashboard-empty-section">
            <div class="row g-5">
              <div class="col-xl-7">
                <div class="d-flex flex-column gap-4">
                  <div class="d-flex justify-content-between gap-3 dashboard-empty-header">
                    <div class="d-flex flex-column gap-1">
                      <h1 class="title"> Welcome back, {sellerInfo?.full_name}</h1>
                      <p class="text">
                        Let’s finish creation your Seller account.
                      </p>
                    </div>

                    <div class="inner-bar-chart">
                      <div class="bar-chart">
                        <div class="bar" style={{ width: "100%" }}>
                          <span style={{ width: "20%" }}></span>
                        </div>
                      </div>
                      <p class="text">10%</p>
                    </div>
                  </div>

                  <div class="d-flex flex-column gap-3">
                    <div class="profile-creation">
                      <div class="d-flex justify-content-between align-items-center gap-2">
                        <div class="left">
                          <figure>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.5708 15.9142C16.3783 15.1554 17.0216 14.2391 17.461 13.2218C17.9003 12.2046 18.1263 11.1081 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875C5.51251 1.875 1.87501 5.5125 1.87501 10C1.87372 11.1081 2.09973 12.2046 2.53905 13.2218C2.97837 14.2391 3.62166 15.1554 4.42917 15.9142C5.93495 17.3366 7.92863 18.1278 10 18.125C12.0714 18.1278 14.0651 17.3366 15.5708 15.9142ZM5.12084 14.8433C5.7059 14.1114 6.44835 13.5206 7.29304 13.1149C8.13772 12.7092 9.06295 12.4991 10 12.5C10.9371 12.4991 11.8623 12.7092 12.707 13.1149C13.5517 13.5206 14.2941 14.1114 14.8792 14.8433C14.2409 15.4881 13.4809 15.9997 12.6433 16.3484C11.8058 16.6972 10.9073 16.8762 10 16.875C9.09273 16.8762 8.19426 16.6972 7.35669 16.3484C6.51913 15.9997 5.75915 15.4881 5.12084 14.8433ZM13.125 7.5C13.125 8.3288 12.7958 9.12366 12.2097 9.70971C11.6237 10.2958 10.8288 10.625 10 10.625C9.1712 10.625 8.37635 10.2958 7.7903 9.70971C7.20425 9.12366 6.87501 8.3288 6.87501 7.5C6.87501 6.6712 7.20425 5.87634 7.7903 5.29029C8.37635 4.70424 9.1712 4.375 10 4.375C10.8288 4.375 11.6237 4.70424 12.2097 5.29029C12.7958 5.87634 13.125 6.6712 13.125 7.5Z"
                                fill="#0F766D"
                              />
                            </svg>
                          </figure>
                          <h3 class="title">Profile Creation</h3>
                          <p class="text bg-green">Done</p>
                        </div>
                        <figure class="right">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M5.73533 2.53267C6.01664 2.20815 6.36448 1.94797 6.75524 1.76979C7.14601 1.5916 7.57053 1.49959 8 1.5C8.90467 1.5 9.71533 1.9 10.2647 2.53267C10.6931 2.50207 11.1232 2.56406 11.5255 2.7144C11.9279 2.86475 12.2932 3.09994 12.5967 3.404C12.9006 3.70738 13.1357 4.07258 13.2861 4.47484C13.4364 4.87709 13.4985 5.30698 13.468 5.73533C13.7924 6.0167 14.0525 6.36457 14.2305 6.75533C14.4086 7.14609 14.5005 7.57058 14.5 8C14.5004 8.42947 14.4084 8.854 14.2302 9.24476C14.052 9.63552 13.7919 9.98336 13.4673 10.2647C13.4978 10.693 13.4357 11.1229 13.2854 11.5252C13.1351 11.9274 12.8999 12.2926 12.596 12.596C12.2926 12.8999 11.9274 13.1351 11.5252 13.2854C11.1229 13.4357 10.693 13.4978 10.2647 13.4673C9.98336 13.7919 9.63552 14.052 9.24476 14.2302C8.854 14.4084 8.42947 14.5004 8 14.5C7.57053 14.5004 7.14601 14.4084 6.75524 14.2302C6.36448 14.052 6.01664 13.7919 5.73533 13.4673C5.30692 13.498 4.87692 13.4361 4.47454 13.2859C4.07216 13.1357 3.70682 12.9006 3.40334 12.5967C3.09931 12.2932 2.86415 11.9279 2.7138 11.5255C2.56346 11.1231 2.50145 10.6931 2.532 10.2647C2.20761 9.9833 1.94755 9.63543 1.76949 9.24467C1.59142 8.85391 1.49951 8.42942 1.5 8C1.5 7.09534 1.9 6.28467 2.53267 5.73533C2.50217 5.30698 2.5642 4.87708 2.71455 4.47482C2.86489 4.07255 3.10003 3.70735 3.404 3.404C3.70735 3.10003 4.07255 2.86489 4.47482 2.71455C4.87708 2.5642 5.30698 2.50217 5.73533 2.53267ZM10.4067 6.79067C10.4467 6.73737 10.4756 6.67661 10.4918 6.61197C10.508 6.54732 10.5111 6.4801 10.5009 6.41424C10.4907 6.34838 10.4675 6.28522 10.4326 6.22847C10.3976 6.17171 10.3517 6.12252 10.2975 6.08377C10.2433 6.04502 10.1819 6.0175 10.1169 6.00282C10.0519 5.98814 9.98459 5.98661 9.91899 5.99831C9.85338 6.01001 9.79078 6.0347 9.73485 6.07094C9.67893 6.10718 9.63081 6.15423 9.59334 6.20933L7.436 9.22933L6.35333 8.14667C6.25855 8.05835 6.13319 8.01027 6.00365 8.01255C5.87412 8.01484 5.75053 8.06731 5.65892 8.15892C5.56731 8.25053 5.51484 8.37412 5.51255 8.50365C5.51027 8.63319 5.55835 8.75855 5.64667 8.85333L7.14667 10.3533C7.19799 10.4046 7.25987 10.4441 7.32799 10.4691C7.39612 10.4941 7.46886 10.5039 7.54118 10.498C7.61349 10.492 7.68364 10.4704 7.74675 10.4346C7.80987 10.3988 7.86444 10.3497 7.90667 10.2907L10.4067 6.79067Z"
                              fill="#26BF6A"
                            />
                          </svg>
                        </figure>
                      </div>
                    </div>

                    <div class="profile-creation">
                      <div class="d-flex justify-content-between align-items-center gap-2">
                        <div class="left">
                          <figure>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.99956 5.62516C9.99939 4.94183 10.1593 4.26796 10.4664 3.65754C10.7736 3.04713 11.2194 2.51715 11.7683 2.11007C12.3171 1.70299 12.9537 1.43014 13.627 1.31337C14.3003 1.1966 14.9915 1.23917 15.6454 1.43766C15.7487 1.46897 15.8422 1.52652 15.9167 1.60471C15.9912 1.68289 16.0441 1.77904 16.0704 1.88378C16.0967 1.98852 16.0954 2.09828 16.0666 2.20236C16.0378 2.30644 15.9826 2.40129 15.9062 2.47766L13.1396 5.2435C13.1921 5.63933 13.3696 6.02183 13.6737 6.326C13.9779 6.63016 14.3604 6.80766 14.7571 6.85933L17.5221 4.0935C17.5984 4.01716 17.6933 3.96191 17.7974 3.93313C17.9014 3.90436 18.0112 3.90304 18.116 3.92931C18.2207 3.95558 18.3168 4.00854 18.395 4.08303C18.4732 4.15751 18.5308 4.25098 18.5621 4.35433C18.7697 5.03838 18.8066 5.76289 18.6695 6.46449C18.5324 7.1661 18.2254 7.82341 17.7755 8.37893C17.3256 8.93445 16.7463 9.37125 16.0885 9.65112C15.4307 9.93098 14.7143 10.0454 14.0021 9.98433C13.1537 9.91266 12.4437 10.0677 12.0779 10.5127L6.11956 17.7502C5.8756 18.045 5.57276 18.2856 5.23043 18.4566C4.88811 18.6276 4.51385 18.7252 4.13161 18.7432C3.74938 18.7612 3.3676 18.6992 3.01071 18.5612C2.65382 18.4231 2.32969 18.2121 2.05908 17.9415C1.78847 17.671 1.57734 17.3469 1.43921 16.99C1.30108 16.6332 1.23899 16.2514 1.25693 15.8692C1.27486 15.4869 1.37241 15.1126 1.54334 14.7703C1.71427 14.4279 1.95481 14.125 2.24956 13.881L9.48623 7.92183C9.9304 7.55516 10.0862 6.846 10.0146 5.99766C10.0044 5.87376 9.99936 5.74949 9.99956 5.62516ZM3.4304 15.9377C3.4304 15.7719 3.49625 15.6129 3.61346 15.4957C3.73067 15.3785 3.88964 15.3127 4.0554 15.3127H4.06206C4.22782 15.3127 4.3868 15.3785 4.50401 15.4957C4.62122 15.6129 4.68706 15.7719 4.68706 15.9377V15.9443C4.68706 16.1101 4.62122 16.2691 4.50401 16.3863C4.3868 16.5035 4.22782 16.5693 4.06206 16.5693H4.0554C3.88964 16.5693 3.73067 16.5035 3.61346 16.3863C3.49625 16.2691 3.4304 16.1101 3.4304 15.9443V15.9377Z"
                                fill="#60637A"
                              />
                            </svg>
                          </figure>
                          <h3 class="title">Garage and Shop Setup</h3>
                          <p class="text bg-red">Needed</p>
                        </div>
                        <figure class="right">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM13.5667 10.4417C13.6837 10.3245 13.7494 10.1656 13.7494 10C13.7494 9.83437 13.6837 9.67552 13.5667 9.55833L11.0667 7.05833C11.0094 6.99693 10.9404 6.94768 10.8638 6.91352C10.7871 6.87936 10.7044 6.86099 10.6204 6.85951C10.5365 6.85803 10.4532 6.87346 10.3753 6.9049C10.2975 6.93633 10.2268 6.98312 10.1675 7.04247C10.1081 7.10182 10.0613 7.17251 10.0299 7.25034C9.99846 7.32816 9.98303 7.41152 9.98451 7.49543C9.98599 7.57935 10.0044 7.66212 10.0385 7.73878C10.0727 7.81545 10.1219 7.88445 10.1833 7.94167L11.6167 9.375H6.875C6.70924 9.375 6.55027 9.44085 6.43306 9.55806C6.31585 9.67527 6.25 9.83424 6.25 10C6.25 10.1658 6.31585 10.3247 6.43306 10.4419C6.55027 10.5592 6.70924 10.625 6.875 10.625H11.6167L10.1833 12.0583C10.1219 12.1156 10.0727 12.1846 10.0385 12.2612C10.0044 12.3379 9.98599 12.4206 9.98451 12.5046C9.98303 12.5885 9.99846 12.6718 10.0299 12.7497C10.0613 12.8275 10.1081 12.8982 10.1675 12.9575C10.2268 13.0169 10.2975 13.0637 10.3753 13.0951C10.4532 13.1265 10.5365 13.142 10.6204 13.1405C10.7044 13.139 10.7871 13.1206 10.8638 13.0865C10.9404 13.0523 11.0094 13.0031 11.0667 12.9417L13.5667 10.4417Z"
                              fill="#7B7F95"
                            />
                          </svg>
                        </figure>
                      </div>
                      <p class="text">
                        Submit information about your service Garage and online
                        shop to sell product and service thought Autocare
                        website.
                      </p>
                    </div>

                    <div class="profile-creation">
                      <div class="d-flex justify-content-between align-items-center gap-2">
                        <div class="left">
                          <figure>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                            >
                              <path
                                d="M10 6.25C9.50272 6.25 9.02581 6.44754 8.67417 6.79917C8.32254 7.15081 8.125 7.62772 8.125 8.125C8.125 8.62228 8.32254 9.09919 8.67417 9.45082C9.02581 9.80246 9.50272 10 10 10C10.4973 10 10.9742 9.80246 11.3258 9.45082C11.6775 9.09919 11.875 8.62228 11.875 8.125C11.875 7.62772 11.6775 7.15081 11.3258 6.79917C10.9742 6.44754 10.4973 6.25 10 6.25Z"
                                fill="#7B7F95"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.25 4.0625C1.25 3.19917 1.95 2.5 2.8125 2.5H17.1875C18.05 2.5 18.75 3.2 18.75 4.0625V12.1875C18.75 13.0508 18.05 13.75 17.1875 13.75H2.8125C2.60731 13.75 2.40413 13.7096 2.21456 13.6311C2.02499 13.5525 1.85274 13.4374 1.70765 13.2924C1.56255 13.1473 1.44746 12.975 1.36894 12.7854C1.29042 12.5959 1.25 12.3927 1.25 12.1875V4.0625ZM6.875 8.125C6.875 7.2962 7.20424 6.50134 7.79029 5.91529C8.37634 5.32924 9.1712 5 10 5C10.8288 5 11.6237 5.32924 12.2097 5.91529C12.7958 6.50134 13.125 7.2962 13.125 8.125C13.125 8.9538 12.7958 9.74866 12.2097 10.3347C11.6237 10.9208 10.8288 11.25 10 11.25C9.1712 11.25 8.37634 10.9208 7.79029 10.3347C7.20424 9.74866 6.875 8.9538 6.875 8.125ZM15.625 7.5C15.4592 7.5 15.3003 7.56585 15.1831 7.68306C15.0658 7.80027 15 7.95924 15 8.125V8.13167C15 8.47667 15.28 8.75667 15.625 8.75667H15.6317C15.7974 8.75667 15.9564 8.69082 16.0736 8.57361C16.1908 8.4564 16.2567 8.29743 16.2567 8.13167V8.125C16.2567 7.95924 16.1908 7.80027 16.0736 7.68306C15.9564 7.56585 15.7974 7.5 15.6317 7.5H15.625ZM3.75 8.125C3.75 7.95924 3.81585 7.80027 3.93306 7.68306C4.05027 7.56585 4.20924 7.5 4.375 7.5H4.38167C4.54743 7.5 4.7064 7.56585 4.82361 7.68306C4.94082 7.80027 5.00667 7.95924 5.00667 8.125V8.13167C5.00667 8.29743 4.94082 8.4564 4.82361 8.57361C4.7064 8.69082 4.54743 8.75667 4.38167 8.75667H4.375C4.20924 8.75667 4.05027 8.69082 3.93306 8.57361C3.81585 8.4564 3.75 8.29743 3.75 8.13167V8.125Z"
                                fill="#7B7F95"
                              />
                              <path
                                d="M1.875 15C1.70924 15 1.55027 15.0658 1.43306 15.1831C1.31585 15.3003 1.25 15.4592 1.25 15.625C1.25 15.7908 1.31585 15.9497 1.43306 16.0669C1.55027 16.1842 1.70924 16.25 1.875 16.25C6.375 16.25 10.7333 16.8517 14.875 17.9792C15.8667 18.2492 16.875 17.5142 16.875 16.4625V15.625C16.875 15.4592 16.8092 15.3003 16.6919 15.1831C16.5747 15.0658 16.4158 15 16.25 15H1.875Z"
                                fill="#7B7F95"
                              />
                            </svg>
                          </figure>
                          <h3 class="title">Setup Billing Information</h3>
                          <p class="text bg-red">Needed</p>
                        </div>
                        <figure class="right">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10 1.875C5.5125 1.875 1.875 5.5125 1.875 10C1.875 14.4875 5.5125 18.125 10 18.125C14.4875 18.125 18.125 14.4875 18.125 10C18.125 5.5125 14.4875 1.875 10 1.875ZM13.5667 10.4417C13.6837 10.3245 13.7494 10.1656 13.7494 10C13.7494 9.83437 13.6837 9.67552 13.5667 9.55833L11.0667 7.05833C11.0094 6.99693 10.9404 6.94768 10.8638 6.91352C10.7871 6.87936 10.7044 6.86099 10.6204 6.85951C10.5365 6.85803 10.4532 6.87346 10.3753 6.9049C10.2975 6.93633 10.2268 6.98312 10.1675 7.04247C10.1081 7.10182 10.0613 7.17251 10.0299 7.25034C9.99846 7.32816 9.98303 7.41152 9.98451 7.49543C9.98599 7.57935 10.0044 7.66212 10.0385 7.73878C10.0727 7.81545 10.1219 7.88445 10.1833 7.94167L11.6167 9.375H6.875C6.70924 9.375 6.55027 9.44085 6.43306 9.55806C6.31585 9.67527 6.25 9.83424 6.25 10C6.25 10.1658 6.31585 10.3247 6.43306 10.4419C6.55027 10.5592 6.70924 10.625 6.875 10.625H11.6167L10.1833 12.0583C10.1219 12.1156 10.0727 12.1846 10.0385 12.2612C10.0044 12.3379 9.98599 12.4206 9.98451 12.5046C9.98303 12.5885 9.99846 12.6718 10.0299 12.7497C10.0613 12.8275 10.1081 12.8982 10.1675 12.9575C10.2268 13.0169 10.2975 13.0637 10.3753 13.0951C10.4532 13.1265 10.5365 13.142 10.6204 13.1405C10.7044 13.139 10.7871 13.1206 10.8638 13.0865C10.9404 13.0523 11.0094 13.0031 11.0667 12.9417L13.5667 10.4417Z"
                              fill="#7B7F95"
                            />
                          </svg>
                        </figure>
                      </div>
                      <p class="text">
                        Submit information about your payment and withdrawal
                      </p>
                    </div>
                  </div>

                  <div class="d-flex flex-column gap-4">
                    <h1 class="help-title">Need Help?</h1>
                    <div class="row g-4">
                      <div class="col-sm-6">
                        <div class="help-video-card">
                          <figure class="video-thumb">
                            <img
                              class="thumb-img"
                              src="./assets/images/thumb-img1.png"
                              alt=""
                            />
                            <img
                              class="play-btn"
                              src="./assets/images/play-btn.png"
                              alt=""
                            />
                          </figure>
                          <h3 class="title">How to create New course?</h3>
                          <p class="details">
                            Create your first new course with ease. Just few
                            clicks to create.
                          </p>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="help-video-card">
                          <figure class="video-thumb">
                            <img
                              class="thumb-img"
                              src="./assets/images/thumb-img2.png"
                              alt=""
                            />
                            <img
                              class="play-btn"
                              src="./assets/images/play-btn.png"
                              alt=""
                            />
                          </figure>
                          <h3 class="title">How to create New course?</h3>
                          <p class="details">
                            Create your first new course with ease. Just few
                            clicks to create.
                          </p>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="help-video-card">
                          <figure class="video-thumb">
                            <img
                              class="thumb-img"
                              src="./assets/images/thumb-img3.png"
                              alt=""
                            />
                            <img
                              class="play-btn"
                              src="./assets/images/play-btn.png"
                              alt=""
                            />
                          </figure>
                          <h3 class="title">How to create New course?</h3>
                          <p class="details">
                            Create your first new course with ease. Just few
                            clicks to create.
                          </p>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="help-video-card">
                          <figure class="video-thumb">
                            <img
                              class="thumb-img"
                              src="./assets/images/thumb-img4.png"
                              alt=""
                            />
                            <img
                              class="play-btn"
                              src="./assets/images/play-btn.png"
                              alt=""
                            />
                          </figure>
                          <h3 class="title">How to create New course?</h3>
                          <p class="details">
                            Create your first new course with ease. Just few
                            clicks to create.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-5">
                <div class="faq-section">
                  <h1 class="title">Faq?</h1>
                  <div class="faq-inner">
                    <ul class="list-unstyled">
                      <li class="faq-item">
                        <figure>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3.33301 8H12.6663"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 3.3335V12.6668V3.3335Z"
                              fill="#1F2937"
                            />
                            <path
                              d="M8 3.3335V12.6668"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </figure>

                        <p class="text">How to set up my Online Store?</p>
                      </li>

                      <li class="faq-item">
                        <figure>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3.33301 8H12.6663"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 3.3335V12.6668V3.3335Z"
                              fill="#1F2937"
                            />
                            <path
                              d="M8 3.3335V12.6668"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </figure>

                        <p class="text">How can I Create My Garage</p>
                      </li>

                      <li class="faq-item">
                        <figure>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3.33301 8H12.6663"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 3.3335V12.6668V3.3335Z"
                              fill="#1F2937"
                            />
                            <path
                              d="M8 3.3335V12.6668"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </figure>

                        <p class="text">
                          How Can I withdraw fund form account?
                        </p>
                      </li>

                      <li class="faq-item">
                        <figure>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3.33301 8H12.6663"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 3.3335V12.6668V3.3335Z"
                              fill="#1F2937"
                            />
                            <path
                              d="M8 3.3335V12.6668"
                              stroke="#1F2937"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </figure>

                        <p class="text">
                          How Can I withdraw fund form account?
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sales-details">
          <div className="row g-4">
            <div className="col-12">
              <div className="sales-details-cart">
                <div className="top-content">
                  <h4 className="title">Total Revenue</h4>
                  {/* <figure className="three-dots-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path
                        d="M10.6663 10.8333C11.1266 10.8333 11.4997 10.4602 11.4997 9.99992C11.4997 9.53968 11.1266 9.16659 10.6663 9.16659C10.2061 9.16659 9.83301 9.53968 9.83301 9.99992C9.83301 10.4602 10.2061 10.8333 10.6663 10.8333Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.6663 4.99992C11.1266 4.99992 11.4997 4.62682 11.4997 4.16659C11.4997 3.70635 11.1266 3.33325 10.6663 3.33325C10.2061 3.33325 9.83301 3.70635 9.83301 4.16659C9.83301 4.62682 10.2061 4.99992 10.6663 4.99992Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.6663 16.6666C11.1266 16.6666 11.4997 16.2935 11.4997 15.8333C11.4997 15.373 11.1266 14.9999 10.6663 14.9999C10.2061 14.9999 9.83301 15.373 9.83301 15.8333C9.83301 16.2935 10.2061 16.6666 10.6663 16.6666Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </figure> */}
                </div>

                <div className="bottom-content">
                  <div className="bottom-content-text">
                    <h2 className="number">
                      {dashBoardInfo?.props?.dashboardinfo?.report?.revenue}
                    </h2>
                    {/* <div className="increase-inner">
                      <figure className="increase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.99984 15.8334V4.16675M9.99984 4.16675L4.1665 10.0001M9.99984 4.16675L15.8332 10.0001"
                            stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </figure>
                      <p className="increase-text">
                        <span className="increase">40%</span> vs last month
                      </p>
                    </div> */}
                  </div>

                  <figure className="increase-graph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="99"
                      height="50"
                      viewBox="0 0 99 50"
                      fill="none"
                    >
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="#ECFDF3"
                      />
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="url(#paint0_linear_1_13305)"
                      />
                      <path
                        d="M1.6665 49C15.3056 44.4536 19.7568 26.9737 33.6665 25C46.4906 23.1804 52.9367 39.9551 65.6665 37C81.1037 33.4164 82.0696 2.29974 97.6665 1"
                        stroke="#12B76A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_13305"
                          x1="49.6665"
                          y1="1"
                          x2="49.6665"
                          y2="49"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.641167"
                            stop-color="white"
                            stop-opacity="0"
                          />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="sales-details-cart">
                <div className="top-content">
                  <h4 className="title">Total Sales</h4>
                  {/* <figure className="three-dots-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path
                        d="M10.6663 10.8333C11.1266 10.8333 11.4997 10.4602 11.4997 9.99992C11.4997 9.53968 11.1266 9.16659 10.6663 9.16659C10.2061 9.16659 9.83301 9.53968 9.83301 9.99992C9.83301 10.4602 10.2061 10.8333 10.6663 10.8333Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.6663 4.99992C11.1266 4.99992 11.4997 4.62682 11.4997 4.16659C11.4997 3.70635 11.1266 3.33325 10.6663 3.33325C10.2061 3.33325 9.83301 3.70635 9.83301 4.16659C9.83301 4.62682 10.2061 4.99992 10.6663 4.99992Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.6663 16.6666C11.1266 16.6666 11.4997 16.2935 11.4997 15.8333C11.4997 15.373 11.1266 14.9999 10.6663 14.9999C10.2061 14.9999 9.83301 15.373 9.83301 15.8333C9.83301 16.2935 10.2061 16.6666 10.6663 16.6666Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </figure> */}
                </div>

                <div className="bottom-content">
                  <div className="bottom-content-text">
                    <h2 className="number">
                      {dashBoardInfo?.props?.dashboardinfo?.report?.total_order}
                    </h2>
                    {/* <div className="increase-inner">
                      <figure className="increase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M9.99984 15.8334V4.16675M9.99984 4.16675L4.1665 10.0001M9.99984 4.16675L15.8332 10.0001"
                            stroke="#12B76A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </figure>
                      <p className="increase-text">
                        <span className="increase">20%</span> vs last month
                      </p>
                    </div> */}
                  </div>

                  <figure className="increase-graph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="99"
                      height="50"
                      viewBox="0 0 99 50"
                      fill="none"
                    >
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="#ECFDF3"
                      />
                      <path
                        d="M97.6665 1C82.0696 2.29974 81.1037 33.4164 65.6665 37C52.9367 39.9551 46.4906 23.1804 33.6665 25C19.7568 26.9737 15.3056 44.4536 1.6665 49H97.6665V1Z"
                        fill="url(#paint0_linear_1_13305)"
                      />
                      <path
                        d="M1.6665 49C15.3056 44.4536 19.7568 26.9737 33.6665 25C46.4906 23.1804 52.9367 39.9551 65.6665 37C81.1037 33.4164 82.0696 2.29974 97.6665 1"
                        stroke="#12B76A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_13305"
                          x1="49.6665"
                          y1="1"
                          x2="49.6665"
                          y2="49"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.641167"
                            stop-color="white"
                            stop-opacity="0"
                          />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="sales-details-cart">
                <div className="top-content">
                  <h4 className="title">Total Service Provided</h4>
                  {/* <figure className="three-dots-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path
                        d="M10.6663 10.8333C11.1266 10.8333 11.4997 10.4602 11.4997 9.99992C11.4997 9.53968 11.1266 9.16659 10.6663 9.16659C10.2061 9.16659 9.83301 9.53968 9.83301 9.99992C9.83301 10.4602 10.2061 10.8333 10.6663 10.8333Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.6663 4.99992C11.1266 4.99992 11.4997 4.62682 11.4997 4.16659C11.4997 3.70635 11.1266 3.33325 10.6663 3.33325C10.2061 3.33325 9.83301 3.70635 9.83301 4.16659C9.83301 4.62682 10.2061 4.99992 10.6663 4.99992Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.6663 16.6666C11.1266 16.6666 11.4997 16.2935 11.4997 15.8333C11.4997 15.373 11.1266 14.9999 10.6663 14.9999C10.2061 14.9999 9.83301 15.373 9.83301 15.8333C9.83301 16.2935 10.2061 16.6666 10.6663 16.6666Z"
                        stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </figure> */}
                </div>

                <div className="bottom-content">
                  <div className="bottom-content-text">
                    <h2 className="number">
                      {
                        dashBoardInfo?.props?.dashboardinfo?.report
                          ?.total_service_booking
                      }
                    </h2>
                    {/* <div className="increase-inner">
                      <figure className="increase-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                          <path d="M10.3333 4.16675V15.8334M10.3333 15.8334L16.1667 10.0001M10.3333 15.8334L4.5 10.0001"
                            stroke="#F04438" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </figure>
                      <p className="decrease-text">
                        <span className="decrease">10%</span> vs last month
                      </p>
                    </div> */}
                  </div>

                  <figure className="increase-graph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="50"
                      viewBox="0 0 98 50"
                      fill="none"
                    >
                      <path
                        d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
                        fill="#FEF3F2"
                      />
                      <path
                        d="M1 1C16.5969 2.29974 17.5628 33.4164 33 37C45.7298 39.9551 52.1759 23.1804 65 25C78.9097 26.9737 83.3609 44.4536 97 49H1V1Z"
                        fill="url(#paint0_linear_1_13337)"
                      />
                      <path
                        d="M97 49C83.3609 44.4536 78.9097 26.9737 65 25C52.1759 23.1804 45.7298 39.9551 33 37C17.5628 33.4164 16.5969 2.29974 1 1"
                        stroke="#F04438"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_13337"
                          x1="49"
                          y1="1"
                          x2="49"
                          y2="49"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0.641167"
                            stop-color="white"
                            stop-opacity="0"
                          />
                          <stop offset="1" stop-color="white" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="notifications-badges">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-4">
                <h1 className="title">Recent Notifications</h1>
                <div className="recent-notification-inner">
                  {dashBoardInfo?.props?.dashboardinfo?.notification?.map(
                    (notification) => (
                      <div
                        className="recent-notification-inner-cart"
                        key={notification?.id}
                      >
                        <div className="d-flex gap-3">
                          <figure className="success-img">
                            <img
                              src="./assets/images/success-icon.png"
                              alt=""
                            />
                          </figure>
                          <div className="cart-content">
                            <div className="d-flex flex-column gap-2">
                              <div className="d-flex flex-column gap-1">
                                <h3 className="title">
                                  {notification?.message}
                                </h3>
                                {/* <p className="details">A new order has been placed.</p> */}
                              </div>
                              {/* <div className="d-flex align-items-center gap-3">
                              <a href="" className="dsismiss-btn">
                                Dismiss
                              </a>
                              <a href="#" className="viewChanges-btn">
                                View changes
                              </a>
                            </div> */}
                            </div>
                          </div>
                        </div>

                        <div className="notification-inner-cart-right">
                          {/* <button className="close-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11 1L1 11M1 1L11 11" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </button> */}
                          <div className="d-flex align-items-center gap-2">
                            <figure className="date-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M7 3.5V7H9.625M12.25 7C12.25 7.68944 12.1142 8.37213 11.8504 9.00909C11.5865 9.64605 11.1998 10.2248 10.7123 10.7123C10.2248 11.1998 9.64605 11.5865 9.00909 11.8504C8.37213 12.1142 7.68944 12.25 7 12.25C6.31056 12.25 5.62787 12.1142 4.99091 11.8504C4.35395 11.5865 3.7752 11.1998 3.28769 10.7123C2.80018 10.2248 2.41347 9.64605 2.14963 9.00909C1.8858 8.37213 1.75 7.68944 1.75 7C1.75 5.60761 2.30312 4.27226 3.28769 3.28769C4.27226 2.30312 5.60761 1.75 7 1.75C8.39239 1.75 9.72774 2.30312 10.7123 3.28769C11.6969 4.27226 12.25 5.60761 12.25 7Z"
                                  stroke="#6B7280"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </figure>
                            <p className="notification-time">
                              {moment(notification?.created_at).format(
                                "MMMM Do YYYY, h:mm:ss a"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="d-flex flex-column gap-4">
                <h1 className="title">Earned Badges</h1>
                <div className="badges-inner">
                  {/* <h2 className="sub-title">
                    You have earned 6 badges out of 12
                  </h2> */}
                  <div className="d-flex flex-wrap gap-3">
                    {dashBoardInfo?.props?.dashboardinfo?.earned_badges?.map(
                      (earnedBadge) => (
                        <div
                          key={earnedBadge?.id}
                          className={`badge ${
                            colorBadge[
                              Math.floor(Math.random() * colorBadge.length)
                            ]
                          }`}
                        >
                          <figure className="badge-img">
                            <img
                              src={earnedBadge?.icon}
                              width={15}
                              height={15}
                            />
                          </figure>
                          <p className="title">{earnedBadge?.badge}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
