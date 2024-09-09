import Link from "next/link";

export default function RootLayout({ children }) {

  return (
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="./assets/images/favicon_io/favicon.ico" type="image/x-icon"/>
  <title>AutoCare vendor-Login</title>
  {/* <!-- FAVICON-ICON --> */}
  <link rel="shortcut icon" href="assets/images/logo/favicon.png" type="image/svg+xml" />
  {/* <!-- font awesome cdn --> */}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  {/* <!-- BOOTSTRAP-CSS --> */}
  <link rel="stylesheet" href="assets/css/bootstrap/bootstrap.min.css" />
  {/* <!--  --> */}
  <link rel="stylesheet" href="./assets/css/nice-select2/nice-select2.css"/>
  {/* <!-- CUSTOM-CSS --> */}
  <link rel="stylesheet" href="assets/css/style.css" />

</head>

<body>
  <header class="header-section">
    <div class="container">
      <div class="header-section-inner d-flex align-items-center justify-content-between gap-4">
        <div class="logo">
          <Link href="/login">
            <img src="./assets/images/Logo-2.png" alt="logo" />
          </Link>
        </div>

        <ul class="header-button list-unstyled d-flex align-items-center gap-3">
          <li>
            <Link class="signUp-btn " href="/setup-store">Cancel</Link>
          </li>
        </ul>
      </div>
    </div>
  </header> 
  {children}
  {/* <!-- BOOTSTRAP-JS --> */}
  <script src="assets/js/bootstrap.min.js"></script>
  {/* <!-- nice-select --> */}
  <script src="./assets/js/nice-select2/nice-select2.js"></script>
  {/* <!-- main js --> */}
  <script src="./assets/js/main.js"></script>
</body>
</html>
);
}