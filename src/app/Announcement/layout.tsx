import type {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Announcement",
    description: "Here you can see every patch notes of Avito Redesign",
};

export default function AnnouncementLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <main>{children}</main>
    );
}
