import type { Metadata } from "next";
import { Noto_Sans_Bengali, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Categories from "@/components/category/Categories";
import AllMarqueeData from "@/components/marquee/AllMarqueeData";
import { Toast } from "@heroui/react";
import { Suspense } from "react";
import MarqueeSkeleton from "@/components/marquee/MarqueeSkeleton";

const geistSans = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazar Dor",
  description: "Explore the Bazar",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="p-2 sm:p-1">
          <Navbar />
          <Categories />
        </div>
        <Suspense fallback={<MarqueeSkeleton />}>
          <AllMarqueeData />
        </Suspense>
        <main className="bg-slate-100">
          <div className="max-w-7xl w-full mx-auto">
            {children}
          </div>
        </main>
        <Footer />
        <Toast.Provider>
        </Toast.Provider>
      </body>
    </html>
  );
}
