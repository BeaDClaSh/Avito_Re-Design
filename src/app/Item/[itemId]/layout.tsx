import type {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Amazing Product",
    description: "See a fantastic product in the Avito Redesign",
};

export default function ItemLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <main>{children}</main>
    );
}
