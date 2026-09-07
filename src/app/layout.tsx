import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ardan | Portfolio",
  description: "Portfolio of Muhammad Hilmi Rafif Ardana",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased dark scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#050505] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
