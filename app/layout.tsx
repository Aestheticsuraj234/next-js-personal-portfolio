import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe | Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
         <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
