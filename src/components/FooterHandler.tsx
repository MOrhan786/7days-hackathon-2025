// src\components\FooterHandler.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";


export default function FooterHandler() {
  const pathname = usePathname();

  // Paths where footer should not appear
  const noFooterPaths = ["/adminCar/adminId"];

  if (noFooterPaths.includes(pathname)) {
    return null; // Do not render Footer
  }

  return <Footer />;
}