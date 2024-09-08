
const SuccessToast = ({ message, dismiss }) => {
  return (
    <div className="container">
      <div className="success-tost">
        <div className="d-flex gap-3 align-items-center">
          <figure className="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_1441_32940)">
                <path
                  d="M7.9987 14.6693C11.6807 14.6693 14.6654 11.6846 14.6654 8.0026C14.6654 4.3206 11.6807 1.33594 7.9987 1.33594C4.3167 1.33594 1.33203 4.3206 1.33203 8.0026C1.33203 11.6846 4.3167 14.6693 7.9987 14.6693Z"
                  stroke="#115E59" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 7.9974L7.33333 9.33073L10 6.66406" stroke="#115E59" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1441_32940">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </figure>
          <p className="success-text">
            {message}
          </p>
        </div>
        <figure className="success-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => {
            dismiss();
          }}>
            <path d="M12 4L4 12" stroke="#115E59" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 4L12 12" stroke="#115E59" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </figure>
      </div>
    </div>
  );
};

export default SuccessToast;
