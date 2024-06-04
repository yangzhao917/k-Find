import { ReactNode } from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "政策搜读", description: "基于kOS的智能搜索，帮助您查找、解读政策，充分利用、享受政策", };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
