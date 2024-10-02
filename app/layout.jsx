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
        <link rel="stylesheet" href="/assets/css/sidebar/sidebar.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/custom.css" />
      </head>
      <body>
        {children}
        <ToasterProvider />
        <Script src="/assets/js/jquery.min.js"></Script>
        <Script src="/assets/js/bootstrap.min.js"></Script>
        <Script src="/assets/js/main.js"></Script>
        <Script src="/assets/js/sidebar.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
