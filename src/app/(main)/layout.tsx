import type { Metadata } from "next";
import "../globals.css";
import HomeNavbar from "@/components/shared/home/HomeNavbar";


export const metadata: Metadata = {
  title: "Wassiou ne",
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
        className={`antialiased`}
      >
        <HomeNavbar />
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
