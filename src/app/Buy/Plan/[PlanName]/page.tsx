"use client";

import {useParams} from "next/navigation";
import Link from "next/link";

const BuyPlan = () => {
    const { PlanName } = useParams();

    return (
        <div className="pt-8 text-center">
            <h1 className="pl-4 pr-4 rounded-md pt-8 gap-4 bg-gradient-to-r from-blue-300 to-pink-500 text-2xl">
                You now wanna buy plan {PlanName}. Are You Sure?
            </h1>
            <div className="flex pt-8 justify-center items-center gap-2">
            <div>
                <Link
                    href={`/checkout/${PlanName}`}
                    className="rounded-md bg-gradient-to-r from-blue-300 to-purple-700 p-3 text-white"
                >
                    Yes
                </Link>
            </div>
            <div>
                <Link
                    href="/"
                    className="rounded-md bg-gradient-to-r from-blue-300 to-purple-700 p-3 text-white"
                >
                    No
                </Link>
            </div>
            </div>
        </div>
    );
};

export default BuyPlan;
