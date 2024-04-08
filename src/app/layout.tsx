import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import NavLi from "./components/NavLi";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body className="bg-Magnolia flex justify-center items-center min-h-screen">
        <div className="relative w-full h-fit max-w-[940px] bg-white rounded-xl flex ">
          <Image
            className="max-sm:hidden "
            src="/bg-sidebar-desktop.svg"
            width={274}
            height={568}
            alt="background"
          />
          <Image
            className="max-sm:block hidden"
            src="/bg-sidebar-mobile.svg"
            width={375}
            height={172}
            alt="background"
          />
          <nav className="z-10 absolute top-0 left-0 m-8 ml-6">
            <NavLi step={1} type={"your info"} />
            <NavLi step={2} type={"select plan"} />
            <NavLi step={3} type={"add-ons"} />
            <NavLi step={4} type={"summary"} />
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
