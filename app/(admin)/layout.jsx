'use client';
import HeaderAdmin from "@/components/admin/HeaderAdmin";
import SideBar from "@/components/admin/SideBar";
import withAuth from "@/hoc/withAuth";
import { usePathname } from "next/navigation";

function layout({ children }) {
  const pathname = usePathname();
  return (
    <div className={pathname === "/identity-verify" || pathname === "/business-setup" ? '' : "wrapper d-flex align-items-stretch"}>
      {pathname === "/identity-verify" || pathname === "/business-setup" ? <HeaderAdmin /> : <SideBar />}
      {children}
    </div>
  );
}
export default withAuth(layout);
