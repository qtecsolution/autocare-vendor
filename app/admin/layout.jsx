import SideBar from "@/components/admin/SideBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AutoCare-Vendor - Home</title>
        {/* <!-- bootstrap css --> */}
        <link rel="stylesheet" href="./assets/css/bootstrap/bootstrap.min.css" />
        {/* <!-- sidebar css --> */}
        <link rel="stylesheet" href="./assets/css/sidebar/sidebar.css" />
        {/* <!--  --> */}
        <link rel="stylesheet" href="./assets/css/nice-select2/nice-select2.css" />
        {/* <!-- New style --> */}
        <link rel="stylesheet" href="./assets/css/style.css" />
      </head>

      <body className="body">
      <div className="wrapper d-flex align-items-stretch">
       <SideBar />
        {children}
      </div>
      </body>

      {/* <!-- jquery js --> */}
      <script src="./assets/js/jquery.min.js"></script>
      {/* <!-- bootstrap js -->*/}
      <script src="./assets/js/bootstrap.min.js"></script> 
      {/* <!-- sidebar --> */}
      <script src="./assets/js/sidebar.js"></script>
      <script src="./assets/js/nice-select2/nice-select2.js"></script>
      {/* <!-- main js --> */}
      <script src="./assets/js/main.js"></script>
    </html>
  );
}
