import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navigation/Navbar";
import TopLinks from "./components/Navigation/TopLinks";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yannis Madu | Web Developer",
  description: "Created by Yannis Madu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-28">
      <body className={`default-dark h-screen ${poppins.className}`}>
        <Navbar />
        <TopLinks />
        {children}
      </body>
    </html>
  );
}
