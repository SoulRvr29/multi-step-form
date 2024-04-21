import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { Ubuntu } from "next/font/google";
import Footer from "./components/Footer";

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
      <body className="relative bg-Magnolia flex max-md:flex-col justify-center items-center min-h-screen  max-md:justify-start">
        <Image
          className="max-md:block hidden mx-auto "
          src="/bg-sidebar-mobile.svg"
          width={375}
          height={172}
          alt="background"
        />
        <div className="p-4 relative ">
          <div className="relative bg-white rounded-xl grid grid-cols-[300px_500px] max-md:grid-cols-1 p-4 max-w-4xl w-full max-md:max-w-lg shadow-xl max-md:-translate-y-16 max-md:p-6 max-md:">
            <div>
              <Image
                className="max-md:hidden"
                src="/bg-sidebar-desktop.svg"
                priority={true}
                width={274}
                height={568}
                alt="background"
              />
            </div>
            <div className="mt-6 max-md:m-2 mb-4 w-full flex flex-col mx-auto justify-between max-w-md">
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
