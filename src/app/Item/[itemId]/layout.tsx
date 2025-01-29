import type {Metadata} from "next";


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
