import Script from "next/script";
import "./globals.css";
import ToasterProvider from "@/components/ToastProvider";

export const metadata = {
  title: "Autocare Vendor",
  description: "AutoCare Vendor Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap/bootstrap.min.css" />
        {/* <!-- sidebar css --> */}
        <link rel="stylesheet" href="/assets/css/sidebar/sidebar.css" />
        {/* <link rel="stylesheet" href="/assets/css/quill-rich-text-editor/quill.snow.css" /> */}
        {/* <!-- New style --> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
      </head>
      <body>
        {children}
        <ToasterProvider />
        {/* <!-- jquery js --> */}
        <Script src="/assets/js/jquery.min.js"></Script>
        {/* <!-- BOOTSTRAP-JS --> */}
        <Script src="/assets/js/bootstrap.min.js"></Script>
        {/* <!-- main js --> */}
        <Script src="/assets/js/main.js"></Script>

        <Script src="/assets/js/sidebar.js"></Script>
        <Script src="/assets/js/nice-select2/nice-select2.js"></Script>
        {/* <!-- quill js --> */}
        {/* <Script src="/assets/js/quill-rich-text-editor/quill.js"></Script>
        <Script src="/assets/js/quill-rich-text-editor/custom.js"></Script> */}
      </body>
    </html>
  );
}
