import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "For You",
    description: "See a beautiful and really important things for you. You must have It",
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
