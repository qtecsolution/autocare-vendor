'use client';
import HeaderAdmin from "@/components/admin/HeaderAdmin";
import SideBar from "@/components/admin/SideBar";
import withAuth from "@/hoc/withAuth";
import { usePathname } from "next/navigation";

function layout({ children }) {
  const pathname = usePathname();
  return (
    <div className="body">
      <div
        className={pathname === "/identity-verify" || pathname === "/business-setup" ||
          pathname === "/brand-list/add-brand" || pathname.startsWith('/brand-list/edit-brand')
          ? '' : "wrapper d-flex align-items-stretch"}>
        {
          pathname === "/identity-verify" || pathname === "/business-setup" ||
            pathname === "/brand-list/add-brand" || pathname.startsWith('/brand-list/edit-brand') ?
            <HeaderAdmin />
            :
            <SideBar />
        }
        {children}
      </div>
    </div>
  );
}
export default withAuth(layout);
