import type { Metadata } from "next";
import { Inter } from "next/font/google";

// components
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Container from 'react-bootstrap/Container';

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container-fluid global-layout-margin">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
