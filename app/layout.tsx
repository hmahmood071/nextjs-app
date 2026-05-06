import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahmood Hassan | Developer Portfolio",
  description: "Full-stack developer passionate about building modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900" suppressHydrationWarning={true}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-slate-800 text-slate-400 text-center py-6 text-sm">
          <p>© 2026 Mahmood Hassan. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </body>
    </html>
  );
}
