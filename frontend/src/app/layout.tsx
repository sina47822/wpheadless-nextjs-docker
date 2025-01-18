import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "NextJs WordPress Headless",
  description: "Simple headless website...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
        antialiased
        overflow-y-scroll
        bg-[url('/background.webp')]
        bg-cover
        bg-no-repeat
        bg-fixed
        bg-top
      `}>
        <div className="max-w-[780px] p-4 md:p-10 mx-auto bg-background min-h-screen">
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
