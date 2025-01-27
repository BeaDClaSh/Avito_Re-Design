// src/app/profile/[userID].tsx
"use client";

import React from "react";
import {useRouter} from "next/router";

const UserProfile = () => {
    const router = useRouter();
    const { userID } = router.query; // Получаем userID из URL

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold">Profile of User {userID}</h1>
            {/* Вы можете здесь сделать запрос на сервер, чтобы получить информацию о пользователе */}
            <p>User ID is: {userID}</p>
            {/* Добавьте логику для отображения данных о пользователе */}
        </div>
    );
};

export default UserProfile;
