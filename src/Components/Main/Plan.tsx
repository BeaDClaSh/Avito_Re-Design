import React from "react";
import Link from "next/link";

interface PlansProps {
    Title: string;
    benefits: string[];
    redirect?: string;
    Price?:string;
}

const Plans: React.FC<PlansProps> = ({ Title, benefits,redirect,Price }) => {
    return (
        <form className="min-h-[50vh] rounded-xl bg-gradient-to-r from-blue-500 to-purple-400 border-gray-200 flex flex-col">
            <label className="p-3 text-2xl text-center">{Title}:</label>
            <ul className="flex-grow"> {/* Key change: Add flex-grow */}
                {benefits.map((benefit, index) => (
                    <li key={index} className="pl-4">- {benefit}</li>
                ))}
            </ul>
            <div className="text-2xl text-center text-gray-800 p-3"> {/* Added padding */}
                {redirect ? (
                    <Link className="z-50 rounded-md bg-gradient-to-r from-blue-300 to-purple-700 p-3" href={redirect}>
                        {Price || "Buy Now"}
                    </Link>
                ) : (
                    <p>Buy is unavailable...</p>
                )}
            </div>
        </form>
    );
};

export default Plans;
