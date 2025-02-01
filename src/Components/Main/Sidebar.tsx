import Link from "next/link";
import React, {useRef} from "react";

interface SidebarProps {
    userID: string | null;
    isUserLoggedIn: boolean;
}

const shortcuts = {
    API_URL: "",  // Если есть URL для API, то добавьте его сюда
    profile: "/profile_key=/",
    settings: "/settings",
    loggout: "/loggout",
    login: "/login",
    PrivacyPolicy: "/PrivacyPolicy",
};

const Sidebar: React.FC<SidebarProps> = ({ userID, isUserLoggedIn }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Открытие диалога, если пользователь не залогинен
    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    return (
        <div className="fixed top-[7%] right-0 bg-white shadow-md p-4 mt-2 rounded-md">
            <ul className="space-y-2">
                <li>
                    {userID ? (
                        <Link href={shortcuts.profile + userID} className="hover:text-blue-500">
                            Profile
                        </Link>
                    ) : (
                        <>
                            <button
                                className=" hover:text-blue-500"
                                onClick={openDialog}
                            >
                                Profile
                            </button>
                            <dialog ref={dialogRef} className="p-4 rounded-md border shadow-lg">
                                <h2 className="text-lg mb-2">You must log in to open your profile</h2>
                                <p>Please log in to view your profile.</p>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        className="bg-blue-500 text-white rounded-md px-4 py-2"
                                        onClick={() => dialogRef.current?.close()}
                                    >
                                        Close
                                    </button>
                                </div>
                            </dialog>
                        </>
                    )}
                </li>
                <li>
                    <Link href={shortcuts.settings} className="hover:text-blue-500">
                        Settings
                    </Link>
                </li>
                <li>
                    <Link href={shortcuts.PrivacyPolicy} className="hover:text-blue-500">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    {isUserLoggedIn ? (
                        <Link href={shortcuts.API_URL + shortcuts.loggout} className="hover:text-red-500">
                            LogOut
                        </Link>
                    ) : (
                        <Link href={shortcuts.login} className="hover:text-green-500">
                            Login
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
