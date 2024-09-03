'use client';
import SideBar from "@/components/admin/SideBar";
import withAuth from "@/hoc/withAuth";

function DashBoardLayout({ children }) {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <SideBar />
      {children}
    </div>
  );
}
export default withAuth(DashBoardLayout);
