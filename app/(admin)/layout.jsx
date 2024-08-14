import SideBar from "@/components/admin/SideBar";
import script from 'next/script'
import '../../public/assets/css/sidebar/sidebar.css';
import '../../public/assets/css/nice-select2/nice-select2.css';
export default function DashBoardLayout({ children }) {
  return (
    <>
      <script src="./assets/js/sidebar.js"></script>
      <script src="./assets/js/nice-select2/nice-select2.js"></script>
      <div className="wrapper d-flex align-items-stretch">
        <SideBar />
        {children}
      </div>
    </>
  );
}
