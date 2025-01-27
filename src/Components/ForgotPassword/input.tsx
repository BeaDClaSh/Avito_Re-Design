"use client";
import {Input} from "@/Components/FiltersPage/ui/input";
import {Label} from "@/Components/FiltersPage/ui/label";
import {AtSign} from "lucide-react";
import {useState} from "react";

const shortcuts = {
    API_URL: "https://example.com/api", // Укажите ваш API URL
    Reset: "/resetPassword",
};

export default function InputFP() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Функция для валидации email
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Обработчик отправки формы
    const handleSubmit = async () => {
alert("sent")
        setError("");
        setSuccess("");

        // Проверка валидности email
        if (!validateEmail(email)) {
            setError("Invalid email format.");
            return;
        }
else{
        try {
            const response = await fetch(shortcuts.API_URL + shortcuts.Reset, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccess("Reset link sent to your email.");
            } else {
                const data = await response.json();
                setError(data.message || "Failed to send reset link.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    }

    };

    return (
        <div className="space-y-4 md:pt-8 sm:p-14 sm:pb-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                    <Label className="" htmlFor="email">Input for Reset password</Label>
                    <div className="relative">
                        <Input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="peer ps-9 bg-gray-700"
                            placeholder="Email"
                            type="email"
                            required
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                            <AtSign size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full py-2 z-50 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
