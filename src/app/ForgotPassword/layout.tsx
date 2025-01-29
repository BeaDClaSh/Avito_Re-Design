import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Forgot Password",
    description: "Forgot Password? Dont worry! We always help you reset your password:)",
};

export default function ForgotPasswordLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <main>{children}</main>
    );
}
