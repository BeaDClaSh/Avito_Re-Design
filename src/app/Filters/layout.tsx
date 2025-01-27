import type {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Filters",
    description: "Filter the products you wanna found. Everything is available for somebody who really want",
};

export default function LoginLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <main>{children}</main>
    );
}
