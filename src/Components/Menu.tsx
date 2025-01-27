"use client";

import React, {useEffect, useState} from "react";
import axios from "axios";
import Sidebar from "@/Components/Sidebar";
import Link from "next/link";

const shortcuts = {
    API_URL: "", // Укажите ваш API URL
    Main:"/",
    Announcements: "/Announcement",
    Filters: "/Filters",
    ForU: "/ForU",
};

const Menu = () => {
    const [isMenuOpened, setMenuOpened] = useState(false);
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [userID, setUserID] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Условие для мобильных устройств
        };

        handleResize(); // Проверяем один раз при загрузке
        window.addEventListener("resize", handleResize); // Обновляем при изменении размера окна

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleopenMenu = () => {
        setMenuOpened((prevState) => !prevState);
    };

    const handleCheckIsLoggedIn = async () => {
        try {
            const sessionID = localStorage.getItem("sessionID");
            if (!sessionID) {
                setUserLoggedIn(false);
                setUserID(null);
                return;
            }

            const response = await axios.get(`${shortcuts.API_URL}/GetInfoAboutUser`, {
                headers: { Authorization: `Bearer ${sessionID}` },
            });

            if (response.data && response.data.userID) {
                setUserLoggedIn(true);
                setUserID(response.data.userID);
            } else {
                setUserLoggedIn(false);
                setUserID(null);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(`error getting info: ${error.message}`);
            } else {
                setError("unknown error");
            }
            console.error("error getting info about user:", error);
            setUserLoggedIn(false);
            setUserID(null);
        }
    };

    useEffect(() => {
        handleCheckIsLoggedIn();
    }, []);

    return (
        <div className="flex fixed z-50 w-full bg-black h-[50px] items-center">
            {/* Логотип */}
            <div className="flex-shrink-0 text-gray-300 md:text-4xl sm:text-xl pl-4 sm:pl-2">
                <Link href={shortcuts.Main}><span>Avito Unofficial Re-Design</span></Link>
            </div>

            {/* Навигационные ссылки */}
            <div className="flex ml-auto gap-4 md:text-4xl sm:text-xl text-gray-400 pr-6">
                {!isMobile && (
                    <>
                        <Link href={shortcuts.Announcements}>
                            <p className="hover:text-white transition duration-200">Announcements</p>
                        </Link>
                        <Link href={shortcuts.Filters}>
                            <p className="hover:text-white transition duration-200">Filters</p>
                        </Link>
                    </>
                )}
                <Link href={shortcuts.ForU}>
                    <p className="hover:text-white transition duration-200">For U</p>
                </Link>
            </div>

            {/* Кнопка меню */}
            <button
                onClick={handleopenMenu}
                type="button"
                className="p-2 z-50 ml-4 sm:mr-2"
            >
                <img
                    src="https://i.ibb.co/QQQTgJS/astral-logo.jpg"
                    alt="Menu"
                    className="w-8 h-8"
                />
            </button>

            {/* Ошибка */}
            {error && (
                <div className="absolute top-16 left-0 bg-red-500 text-white p-2 rounded-md">
                    {error}
                </div>
            )}

            {/* Выпадающее меню */}
            {isMenuOpened && <Sidebar isUserLoggedIn={isUserLoggedIn} userID={userID} />}
        </div>

    );
};

export default Menu;
