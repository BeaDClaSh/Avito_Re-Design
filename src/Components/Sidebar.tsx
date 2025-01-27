import Link from "next/link";
import React from "react";

interface SidebarProps {
    userID: string | null;
    isUserLoggedIn: boolean;
}
const shortcuts={
    API_URL:"",
    profile:"/profile_key=/",
    settings:"/settings",
    loggout:"/loggout",
    login:"/login",
}

const Sidebar: React.FC<SidebarProps> = ({ userID, isUserLoggedIn }) => {
    return (
        <div className="bg-white shadow-md p-4 pt-5z mt-2 rounded-md">
            <ul className="pt-6 space-y-2">
                <li>
                    {userID ? (
                        <Link href={shortcuts.profile+userID} className="hover:text-blue-500">
                            Profile
                        </Link>
                    ) : (
                        <span className="text-gray-400">Profile</span>
                    )}
                </li>
                <li>
                    <Link href={shortcuts.settings} className="hover:text-blue-500">
                        Settings
                    </Link>
                </li>
                <li>
                    {isUserLoggedIn ? (
                        <Link href={shortcuts.API_URL+shortcuts.loggout} className="hover:text-red-500">
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
