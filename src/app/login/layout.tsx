import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Login Page",
    description: "User login to the Avito service, Login into avito marketplace re-design",
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
