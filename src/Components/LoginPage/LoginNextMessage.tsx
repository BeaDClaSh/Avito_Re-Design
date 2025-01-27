"use client"
import AOS from "aos"
import {useCallback, useEffect, useState} from "react"
import {DotLottieReact} from '@lottiefiles/dotlottie-react'

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Shop", "Sell","Rent"];

const LoginNextMessage = () => {
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [wordIndex, setWordIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    // Optimize AOS initialization
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: true,
                offset: 10,

            });
        };

        initAOS();
        window.addEventListener('resize', initAOS);
        return () => window.removeEventListener('resize', initAOS);
    }, []);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    // Optimize typing effect
    const handleTyping = useCallback(() => {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                setText(prev => prev + WORDS[wordIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                setText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            } else {
                setWordIndex(prev => (prev + 1) % WORDS.length);
                setIsTyping(true);
            }
        }
    }, [charIndex, isTyping, wordIndex]);

    useEffect(() => {
        const timeout = setTimeout(
            handleTyping,
            isTyping ? TYPING_SPEED : ERASING_SPEED
        );
        return () => clearTimeout(timeout);
    }, [handleTyping]);

    const lottieOptions = {
        src:"https://lottie.host/0d5bb9e1-a115-479e-85d1-de8c8c414c5f/iAc5epjm9x.lottie",
        loop: true,
        autoplay: true,
        style: { width: "100%", height: "100%" },
        className: `w-full h-full transition-all duration-500 ${
            isHovering
                ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
                : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
        }`
    };
return (
    <>
        <div className="grid sm:pt-8 md:pt-16">
            {/* Контейнер анимации */}
            <div
                className={`grid z-10 top-16 opacity-90 transform transition-transform duration-500 ${
                    isHovering ? "scale-105" : "scale-100"
                }`}
            >
                <div className="grid pt-5">
                    <DotLottieReact {...lottieOptions} />
                </div>
                <div className="fixed sm:text-xl md:text-xl lg:text-5xl left-1/2 flex sm:justify-center md:bottom-3/4 sm:bottom-2/3 pt-6 md:pt-10 -translate-x-1/2">
        <span className="flex sm:pl-4 md:pl-3
         md:pt-20 text-gray-600 text-center">
            {text}
        </span>
                </div>
            </div>
        </div>

    </>

)
}
export default LoginNextMessage;