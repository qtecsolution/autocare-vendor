'use client';
import SideBar from "@/components/admin/SideBar";
import withAuth from "@/hoc/withAuth";
import { usePathname } from "next/navigation";

function layout({ children }) {
  const pathname = usePathname();
  return (
    <div className="wrapper d-flex align-items-stretch">
      {pathname === "/identity-verify" ? '' : <SideBar />}
      {children}
    </div>
  );
}
export default withAuth(layout);
