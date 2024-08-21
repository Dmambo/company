import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../i18n';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amibrama Site Creation",
  description: "This is a place where you can get your website created",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        <Navbar />
        <Separator />
        {children}
        {/* <Separator /> */}
        <Footer />
      </body>
    </html>
  );
}
