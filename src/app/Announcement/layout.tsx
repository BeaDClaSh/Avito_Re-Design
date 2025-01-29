import type {Metadata} from "next";


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
