import Link from "next/link";

const shortcuts = {
    forgotPassword: "/ForgotPassword",
    PrivacyPolicy: "/PrivacyPolicy",

}

const Settings = () => {
    return(
        <>
            <div className="grid bg-gradient-to-b from-blue-500 to-purple-800 text-gray-400 md:grid-cols-2 gap-3 sm:grid-cols-1 md:pt-10 sm:pt-16">
                <div>
<h1>Settings</h1>
                </div>
                <div>
                    <Link href={shortcuts.forgotPassword}>Change Password</Link>
                </div>
                <Link href={shortcuts.PrivacyPolicy}>Privacy Policy</Link>
            </div>

        </>
    )
}
export default Settings;