import "./globals.css";

export const metadata = {
  title: "Autocare Vendor",
  description: "AutoCare Vendor Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- FAVICON-ICON --> */}
        <link
          rel="shortcut icon"
          href="./assets/images/favicon.ico"
          type="image/x-icon"
        />
        <title>AutoCare vendor-Login</title>
        <link
          rel="shortcut icon"
          href="assets/images/logo/favicon.png"
          type="image/svg+xml"
        />

        {/* <!-- font awesome cdn --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* <!-- BOOTSTRAP-CSS --> */}
        <link rel="stylesheet" href="assets/css/bootstrap/bootstrap.min.css" />

        {/* <!-- CUSTOM-CSS --> */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </head>
      <body>{children}</body>

      {/* <!-- BOOTSTRAP-JS --> */}
      <script src="assets/js/bootstrap/bootstrap.bundle.min.js"></script>
      {/* <!-- main js --> */}
      <script src="./assets/js/main.js"></script>
    </html>
  );
}
