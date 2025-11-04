import type { Metadata } from "next";
import "./globals.css";
import { Satoshi } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Wassiou artisan website",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Satoshi.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
