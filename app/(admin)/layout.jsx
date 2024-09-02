'use client';
import SideBar from "@/components/admin/SideBar";
import '../../public/assets/css/sidebar/sidebar.css';
import '../../public/assets/css/nice-select2/nice-select2.css';
import '../../public/assets/css/quill-rich-text-editor/quill.snow.css';
export default function DashBoardLayout({ children }) {
  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <SideBar />
        {children}
      </div>
    </>
  );
}
