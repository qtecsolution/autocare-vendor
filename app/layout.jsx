import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Autocare Vendor",
  description: "AutoCare Vendor Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- font awesome cdn --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
        <link rel="stylesheet" href="./assets/css/style.css" />
      </head>
      <body>

        {children}

        {/* <!-- jquery js --> */}
        <Script src="./assets/js/jquery.min.js"></Script>
        {/* <!-- BOOTSTRAP-JS --> */}
        <Script src="./assets/js/bootstrap.min.js"></Script>
        {/* <!-- main js --> */}
        <Script src="./assets/js/main.js"></Script>

      <Script src="/assets/js/sidebar.js"></Script>
      <Script src="/assets/js/nice-select2/nice-select2.js"></Script>
      {/* <!-- quill js --> */}
      <Script src="/assets/js/quill-rich-text-editor/quill.js"></Script>
      <Script src="/assets/js/quill-rich-text-editor/custom.js"></Script>
      </body>
    </html>
  );
}
