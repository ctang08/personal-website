import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christopher Tang",
  description:
    "Designer and developer crafting thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
