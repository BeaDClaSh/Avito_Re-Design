import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import CopyRights from "@/Components/CopyRights";
import Menu from "@/Components/Menu";
import AnimatedBackground from "@/Components/AnimatedBackground";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avito 2.0",
  description: "unofficial Re-design for Avito marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans} ${geistMono} antialiased`}
      >
      <AnimatedBackground/>
      <Menu/>
        {children}
      <CopyRights/>
      </body>
    </html>
  );
}
