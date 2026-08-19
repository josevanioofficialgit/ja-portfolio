"use client";
import { useRef, useEffect, useState } from "react";
import { Info, Mail, CircleQuestionMark } from "lucide-react";

export default function GlobalNav() {
    const [active, setActive] = useState(0);

    return (
        <>
            {/* PROJECTS */}
            {active === 1 && (
                <div className="fixed bottom-35 left-1/2 -translate-x-1/2 z-40 bg-black w-[80%] md:w-125 min-h-14 rounded-2xl p-4 global_info">
                    <h1 className="text-white font-semibold">About Projects</h1>

                    <p className="text-[#ffffffcf] text-xs mt-4">
                        <span className="font-semibold text-orange-500">Sample Projects:</span> projects that are used as a sample to show
                        my abilities as a frontend dev.
                    </p>
                    <p className="text-[#ffffffcf] text-xs">
                        <span className="font-semibold text-green-500">Real-World Projects:</span> projects that exist and are currently
                        live and being used by users worldwide or a specific client. These required my expertise as a Full-Stack Developer
                        (Frontend and Backend)
                    </p>

                    <p className="text-[#ffffffcf] font-semibold mt-4">Wickland (Sample Project)</p>
                    <p className="text-sm text-[#ffffff86]">Wickland is a sample website for a soon to be released comic book. </p>
                </div>
            )}

            {/* ABOUT ME */}
            {active === 2 && (
                <div className="fixed bottom-35 left-1/2 -translate-x-1/2 z-40 bg-black w-[80%] md:w-125 min-h-14 rounded-2xl p-4 global_info">
                    <h1 className="text-white font-semibold">About Me</h1>
                    <p className="text-[#ffffffcf] font-semibold mt-4">Josevânio António (Full-Stack Web Developer)</p>
                    <p className="text-sm text-[#ffffff86]">Full-Stack Web Developer with 8+ years of experience.</p>
                    <p className="text-sm text-[#ffffff86]">Thank you for stoping by!</p>
                </div>
            )}

            {/* CONTACT */}
            {active === 3 && (
                <div className="fixed bottom-35 left-1/2 -translate-x-1/2 z-40 bg-black w-[80%] md:w-125 min-h-14 rounded-2xl p-4 global_info">
                    <h1 className="text-white font-semibold">Contact</h1>
                    <p className="text-[#ffffffcf] font-semibold mt-4">Email: josevanioofficial@gmail.com</p>
                </div>
            )}

            {/* GLOBAL NAVIGATION */}
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 min-w-50 h-12.5 rounded-full bg-[#ffffff] flex justify-center items-end py-3 px-6 z-40 gap-3 shadow-2xl shadow-white global_nav">
                {/* About projects */}
                <div className="w-17.5 h-17.5 rounded-full bg-black -translate-y-4 flex justify-center items-center">
                    <div
                        onClick={() => {
                            setActive((prev) => (prev === 1 ? 0 : 1));
                        }}
                        className={`${active === 1 ? "bg-[#ffffff]" : "bg-[#171717]"} p-3 rounded-full cursor-pointer hover:scale-150 hover:transition-transform hover:duration-300 hover:ease-in-out`}
                    >
                        <Info color={`${active === 1 ? "#000000" : "#ffffff"}`} strokeWidth={3} size={20} />
                    </div>
                </div>

                {/* Separator */}
                <div className="bg-[#ffffff58] w-1 h-14 my-2 rounded-full"></div>

                {/* About me */}
                <div className="w-17.5 h-17.5 rounded-full bg-black -translate-y-4 flex justify-center items-center">
                    <div
                        onClick={() => {
                            setActive((prev) => (prev === 2 ? 0 : 2));
                        }}
                        className={`${active === 2 ? "bg-[#ffffff]" : "bg-[#171717]"} p-3 rounded-full cursor-pointer hover:scale-150 hover:transition-transform hover:duration-300 hover:ease-in-out`}
                    >
                        <CircleQuestionMark color={`${active === 2 ? "#000000" : "#ffffff"}`} strokeWidth={3} size={20} />
                    </div>
                </div>

                {/* My Email */}
                <div className="w-17.5 h-17.5 rounded-full bg-black -translate-y-4 flex justify-center items-center">
                    <div
                        onClick={() => {
                            setActive((prev) => (prev === 3 ? 0 : 3));
                        }}
                        className={`${active === 3 ? "bg-[#ffffff]" : "bg-[#171717]"} p-3 rounded-full cursor-pointer hover:scale-150 hover:transition-transform hover:duration-300 hover:ease-in-out`}
                    >
                        <Mail color={`${active === 3 ? "#000000" : "#ffffff"}`} strokeWidth={3} size={20} />
                    </div>
                </div>

                {/* My Github */}
                <div className="w-17.5 h-17.5 rounded-full bg-black -translate-y-4 flex justify-center items-center">
                    <a href="https://github.com/josevanioofficialgit" target="_blank">
                        <div
                            onClick={() => {
                                setActive((prev) => (prev === 4 ? 0 : 4));
                            }}
                            className={`${active === 4 ? "bg-[#ffffff]" : "bg-[#171717]"} p-3 rounded-full cursor-pointer hover:scale-150 hover:transition-transform hover:duration-300 hover:ease-in-out`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className={`bi bi-github ${active === 4 ? "text-[#000000]" : "text-[#ffffff]"}`}
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
