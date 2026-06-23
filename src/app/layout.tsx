import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manisha Rai Portfolio",
  description: "Software Engineer • Full-Stack Developer • Graphic Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
