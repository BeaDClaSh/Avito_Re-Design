import Menu from "@/Components/Menu";
import Link from "next/link";
import SplitText from "@/Components/SplitText";
import AnimatedBackground from "../Components/AnimatedBackground";
import ContactPage from "@/Components/Main/FeedBack";
import TitleH1Home from "@/Components/Main/TitleH1Home";
import Statistic from "@/Components/Main/Statistic";
import React from "react";
import AvaiblePlans from "@/Components/Main/AvaiblePlans";
import CopyRights from "@/Components/CopyRights";

export default function Home() {
    return (
        <>
            <AnimatedBackground />
            <Menu />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 md:grid-rows-1 sm:grid-rows-3 md:gap-16  pt-12 gap-4 max-h-max font-[family-name:var(--font-geist-sans)]">
                <TitleH1Home />
                <div className="grid grid-rows-2 sm:justify-center md:pl-6 bg-opacity-50">
                    <AnimatedBackground></AnimatedBackground>
                    <div className="grid sm:pt-5 md:pt-52 pb-10">
                    <Link href="/login" className="grid text-gray-300 justify-between sm:max-w-4xl md:max-w-6xl z-20 md:text-6xl sm:text-4xl pl-16">
                        <SplitText className="flex sm:text-3xl" text={"Login"} />
                    </Link>
                    </div>
                    <a href="#features" className="md:text-6xl text-gray-300 sm:text-4xl pl-16">
                        <SplitText className="flex sm:text-3xl" text={"See a Features"} />
                    </a>
                </div>
            </div>

            <div id="features" className="grid">
                <div
                    className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6"
                    style={{ width: "100%", height: "400px" }}
                >
                    <Statistic/>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3">
<AvaiblePlans/>
                </div>
                <ContactPage />
            </div>
            <CopyRights/>
        </>
    );
}
