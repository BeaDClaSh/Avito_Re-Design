import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Buy Plan",
    description: "Buy Product Which you wanna",
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
