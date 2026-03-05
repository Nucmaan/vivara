import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivara Real Estate - Real homes live in Somalia",
  description: "Find properties for sale and rent in Somalia. Real Data. Real Brokers. Real Properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
