import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "User! Read It for know what do you can and what you can't",
};

export default function PrivacyPoliceLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <main>{children}</main>
    );
}
