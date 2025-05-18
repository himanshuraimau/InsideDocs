import { Navbar } from "@/components/navbar";
import { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  
  title: "InsideDocs",
  description:
    "InsideDocs using Retrieval Augmented Generation and Middleware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
