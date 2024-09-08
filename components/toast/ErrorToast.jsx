
const ErrorToast = ({ message, dismiss }) => {
  return (
    <div className="container">
      <div className="warning-tost">
        <div className="d-flex gap-3 align-items-center">
          <figure className="warning-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_1441_35650)">
                <path
                  d="M7.9987 14.6693C11.6806 14.6693 14.6654 11.6845 14.6654 8.0026C14.6654 4.32071 11.6806 1.33594 7.9987 1.33594C4.3168 1.33594 1.33203 4.32071 1.33203 8.0026C1.33203 11.6845 4.3168 14.6693 7.9987 14.6693Z"
                  stroke="#854D0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 10.6667V8" stroke="#854D0E" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M8 5.33594H8.00667" stroke="#854D0E" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1441_35650">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </figure>
          <p className="warning-text">
            {message}
          </p>
        </div>
        <figure className="warning-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={() => {
            dismiss();
          }}>
            <path d="M12 4L4 12" stroke="#854D0E" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 4L12 12" stroke="#854D0E" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </figure>
      </div>
    </div>
  );
};

export default ErrorToast;
