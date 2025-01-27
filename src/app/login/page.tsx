"use client";

import React from "react";
import axios from "axios";
import Menu from "@/Components/Menu"
import LoginNextMessage from "@/Components/LoginPage/LoginNextMessage";
import AnimatedBackground from "@/Components/AnimatedBackground";
import Link from "next/link";
import CopyRights from "@/Components/CopyRights";

const shortcuts = {
    API_URL: "https://your-api-url.com", // Укажите свой API URL
    login: "/login",
    register: "/register",
};

const Login: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [isLogin, setIsLogin] = React.useState(true);

    const validate = (info: { username?: string; email: string; password: string }) => {
        const usernameRegex = /^[a-zA-Z0-9._]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordMinLength = 6;

        if (!emailRegex.test(info.email)) {
            return "Invalid email format.";
        }
        if (info.password.length < passwordMinLength) {
            return `Password must be at least ${passwordMinLength} characters long.`;
        }
        if (info.username && !usernameRegex.test(info.username)) {
            return "Username can only contain letters, numbers, dots, and underscores.";
        }
        return null; // Валидация прошла успешно
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        setError("");

        const validationError = validate({username: !isLogin ? username : undefined, email, password});
        if (validationError) {
            setError(validationError);
            return;
        }

        const url = isLogin
            ? `${shortcuts.API_URL}/auth${shortcuts.login}`
            : `${shortcuts.API_URL}/auth${shortcuts.register}`;
        setLoading(true);

        try {
            const response = await axios.post(url, {
                username: !isLogin ? username : undefined, // Только для регистрации
                email,
                password,
            });

            if (response.status === 200 && response.data) {
                const sessionId = response.data.sessionId;
                if (sessionId) {
                    sessionStorage.setItem("sessionId", sessionId);
                    console.log("Session ID:", sessionId);
                    // redirect to dashboard or main page
                } else {
                    setError("Failed to retrieve sessionId.");
                }
            } else {
                setError("Authentication error. Please try again.");
            }
        } catch (error: any) {
            console.error("Request error:", error);
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data?.error || "An error occurred. Please try again later.");
            } else {
                setError("Network error. Check your connection.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <AnimatedBackground/>
            <Menu/>
            <div className="grid pt-16 gap-10 md:grid-cols-2 md:grid-rows-2 sm:grid-rows-3 sm:grid-cols-1 justify-center items-center">
                {/* Сообщение/информация */}
                <div className="md:pt-10">
                    <LoginNextMessage />
                </div>

                {/* Форма */}
                <div className="grid pt-5 z-50">
                    <form
                        onSubmit={handleSubmit}
                        className="p-6 z-50 bg-gray-800 rounded-lg shadow-lg sm:justify-center sm:pt-5 sm:w-full md:w-[400px]"
                    >
                        <h1 className="text-2xl font-bold text-center text-white mb-6">
                            {isLogin ? "Login" : "Register"}
                        </h1>

                        {/* Имя пользователя (только для регистрации) */}
                        {!isLogin && (
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                aria-label="Username"
                                className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        )}

                        {/* Поле email */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            aria-label="Email"
                            className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />

                        {/* Поле пароля */}
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            aria-label="Password"
                            className="w-full p-2 mb-4 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            required
                        />

                        {/* Ошибки */}
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        {/* Кнопка входа/регистрации */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 bg-cyan-500 text-white font-bold rounded hover:bg-cyan-600 transition duration-300 flex items-center justify-center"
                        >
                            {loading ? (
                                <>
                                    <span className="animate-spin border-t-2 border-white border-2 rounded-full w-4 h-4 mr-2"></span>
                                    Loading...
                                </>
                            ) : (
                                isLogin ? "Login" : "Register"
                            )}
                        </button>

                        {/* Переключение между входом и регистрацией */}
                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                            className="w-full rounded-md mt-4 py-2 text-cyan-500 font-bold border border-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300"
                        >
                            {isLogin ? "Register" : "Login"}
                        </button>
                        {isLogin&& (
                            <button type="button"
                                            className="w-full rounded-md mt-4 py-2 text-cyan-500 font-bold border border-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300"
                        >
                            <Link href="/ForgotPassword">Forgot Password</Link>
                        </button>
                        )
                        }

                    </form>
                </div>
            </div>
<CopyRights/>
        </>
    )
}
    export default Login;
