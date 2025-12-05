import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Batch Mix-Up Detection JIG",
  description: "Professional presentation of automatic QR scanning solution for batch mix-up prevention",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
