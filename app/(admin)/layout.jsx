import SideBar from "@/components/admin/SideBar";
import Script from 'next/script'
import '../../public/assets/css/sidebar/sidebar.css';
import '../../public/assets/css/nice-select2/nice-select2.css';
export default function DashBoardLayout({ children }) {
  return (
    <>
      <Script src="./assets/js/sidebar.js"></Script>
      <Script src="./assets/js/nice-select2/nice-select2.js"></Script>
      <div className="wrapper d-flex align-items-stretch">
        <SideBar />
        {children}
      </div>
    </>
  );
}
