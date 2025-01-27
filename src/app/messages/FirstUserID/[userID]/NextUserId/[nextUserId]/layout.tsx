import type {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Avito messages",
    description: "User chat via 2 users",
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
