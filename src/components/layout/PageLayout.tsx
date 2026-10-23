import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function PageLayout({ children }: {children: React.ReactNode;}) {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-neutral-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>);

}