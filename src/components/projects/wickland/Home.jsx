"use client";
import { useState } from "react";
import Image from "next/image";
import { EyeOff, Crosshair, ShieldAlert, Scale, ScrollText } from "lucide-react";
import Nav from "./Nav";
import ActionButton from "./ActionButton";
import Card from "./Card";
import Thumbnail from "./Thumbnail";
import styles from "./style.module.css";

// This is the home of a sample project which is a one page project intended to show more the developer's frontend skills
export default function Home() {
    const [currentNav, setCurrentNav] = useState(0);

    return (
        <>
            <Nav currentNav={currentNav} setCurrentNav={setCurrentNav} />
            {/* HERO */}
            <div className={`font_instrument_sans w-full h-full relative ${styles.hero}`}>
                {/* Socials */}
                <div
                    className={`absolute top-1/2 -translate-y-1/2 left-4 md:left-8 flex flex-row md:flex-col gap-4 md:gap-6 border-t-2 border-t-red-800 pt-3 md:pt-6 max-md:mt-20 max-xl:mt-40`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="black"
                        className="bi bi-twitter-x cursor-pointer"
                        viewBox="0 0 16 16"
                        strokeWidth="0.3"
                        stroke="black"
                    >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="black"
                        className="bi bi-instagram cursor-pointer"
                        viewBox="0 0 16 16"
                        strokeWidth="0.3"
                        stroke="black"
                    >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="black"
                        className="bi bi-envelope cursor-pointer"
                        viewBox="0 0 16 16"
                        strokeWidth="0.3"
                        stroke="black"
                    >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                </div>

                {/* Filler */}
                <div className={`max-md:hidden absolute top-20 left-1/2 -translate-x-1/2 mt-8 font_impact`}>
                    <div className="border-l-2 border-l-red-800 pl-3">
                        <p className="text-[18px] text-black">I DON&apos;T FOLLOW THE RULES.</p>
                    </div>
                    <div className="pl-3">
                        <p className="text-[18px] text-black">I MAKE MY OWN.</p>
                    </div>
                </div>

                <div className={`max-md:hidden absolute max-xl:top-30 left-1/2 -translate-x-1/2 max-xl:mt-8 xl:bottom-14 xl:ml-28`}>
                    <div className="text-sm text-gray-600 pl-3 my-5 xl:my-3 font-semibold">
                        <p>I solve problems others can&apos;t.</p>
                        <p>Discreetly. Efficiently. Permanently.</p>
                    </div>

                    <div className="pl-3 flex gap-6">
                        <ActionButton
                            text={`LEARN MORE`}
                            btnstyle={
                                "bg-red-700 cursor-pointer border-none rounded flex justify-center items-center font-bold text-xs p-2 xl:py-3 xl:px-4 text-white gap-2 max-md:mt-6"
                            }
                            iconcolor={"white"}
                            textstyle={""}
                        />
                        <ActionButton
                            text={`VIEW WORK`}
                            btnstyle={`bg-transparent cursor-pointer border-b-2 border-b-red-800 flex justify-center items-center font-bold text-xs text-black gap-2 max-md:mt-6 py-0`}
                            iconcolor={"darkred"}
                            textstyle={""}
                        />
                    </div>
                </div>
            </div>

            {/* =============== ABOUT =============== */}
            <div
                className={`font_geist_mono  w-full min-h-112.5 md:min-h-62.5 bg-black grid grid-rows-3 md:grid-rows-1 md:grid-cols-3`}
                id="about"
            >
                <div className="p-4">
                    <div className={`w-full h-full rounded-2xl ${styles.aboutphoto}`}></div>
                </div>
                <div className="p-2">
                    <small className="text-xs tracking-wide text-red-800 font-semibold">ABOUT ME</small>
                    <p className="text-white font-semibold max-xl:text-sm">I WORK IN THE SHADOWS SO YOU DON&apos;T HAVE TO.</p>
                    <p className="text-xs text-[#ffffff58] my-3">
                        With a set of particular skills and a very particular mindset, I deliver results where others fail. No names. No
                        paper trails. No second chances.
                    </p>
                    <ActionButton
                        text={`MORE ABOUT ME`}
                        btnstyle={
                            "bg-transparent cursor-pointer border-2 border-red-900 rounded flex justify-center items-center font-bold text-xs p-2 xl:py-3 xl:px-4 text-white gap-2 mt-5 w-fit"
                        }
                        iconcolor={"text-white md:text-red-800"}
                        textstyle={""}
                    />
                </div>
                <div className="max-md:border-t max-md:mx-4 md:my-6 max-md:border-t-[#ffffff58] md:border-l md:border-l-[#ffffff58] p-3 xl:p-6">
                    <div className="flex gap-6 p-2 border-b border-b-[#ffffff58]">
                        <EyeOff color={"darkred"} strokeWidth={2} size={40} />
                        <div>
                            <p className="text-white text-sm">DISCREET</p>
                            <p className="text-[#ffffff58] text-xs">You won&apos;t see me coming.</p>
                            <p className="text-[#ffffff58] text-xs">You won&apos;t see me leave.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 p-2 border-b border-b-[#ffffff58] my-4">
                        <Crosshair color={"darkred"} strokeWidth={2} size={40} />
                        <div>
                            <p className="text-white text-sm">DEADLY</p>
                            <p className="text-[#ffffff58] text-xs">When it&apos;s over,</p>
                            <p className="text-[#ffffff58] text-xs">the problem is gone.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 p-2 border-b border-b-[#ffffff58]">
                        <ShieldAlert color={"darkred"} strokeWidth={2} size={40} />
                        <div>
                            <p className="text-white text-sm">DEPENDABLE</p>
                            <p className="text-[#ffffff58] text-xs">I get the job done.</p>
                            <p className="text-[#ffffff58] text-xs">Always.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* =============== SERVICES =============== */}
            <div
                className={`font_instrument_sans w-full min-h-42.5 bg-[#f6ece7] grid grid-rows-5 md:grid-rows-1 md:grid-cols-5 gap-2 px-2 py-6`}
                id="services"
            >
                <div className="flex flex-col justify-center p-2">
                    <small className="text-xs tracking-wide text-red-800 font-semibold">WHAT I DO</small>
                    <p className="text-black font-semibold md:max-xl:text-sm">SOLUTIONS FOR IMPOSSIBLE PROBLEMS.</p>
                    <div className="border border-b-red-700 w-10 mt-2"></div>
                </div>

                <Card title={"CONTRACTS"} text1={"Precision execution."} text2={"No loose ends."} />
                <Card title={"PROTECTION"} text1={"Close protection for"} text2={"those who matter."} />
                <Card title={"EXTRACTIONS"} text1={"Get in. Get out."} text2={"No one sees a thing."} />
                <Card title={"CONSULTING"} text1={"Strategic solutions"} text2={"tailored to you."} />
            </div>

            {/* =============== CHAPTERS =============== */}
            <div
                className={`font_instrument_sans w-full min-h-50 bg-black grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-4 px-2 py-6`}
                id="chapters"
            >
                <div className="flex flex-col justify-center p-4">
                    <small className="text-xs tracking-wide text-red-800 font-semibold">FEATURED CHAPTERS</small>

                    <p className="text-white font-semibold md:max-xl:text-sm">
                        A FEW EXAMPLES. <br /> MORE TO COME.
                    </p>

                    <ActionButton
                        text={`VIEW ALL CHAPTERS`}
                        btnstyle={`bg-transparent cursor-pointer border-2 border-red-800 flex justify-center items-center font-bold text-xs text-white gap-2 mt-6 px-4 py-2 w-fit`}
                        iconcolor={"text-red-800"}
                        textstyle={""}
                    />
                </div>

                <Thumbnail title={"THE VANISHING"} subtitle={"Chapter 1"} styles={styles.chapter1} />
                <Thumbnail title={"CLEAN SWEEP"} subtitle={"Chapter 2"} styles={styles.chapter2} />
                <Thumbnail title={"GONE BEFORE DAWN"} subtitle={"Chapter 3"} styles={styles.chapter3} />
            </div>

            {/* =============== CONTACT =============== */}
            <div className={`w-full min-h-12.5 md:min-h-25 flex justify-center items-center gap-3 md:gap-16 ${styles.contact}`}>
                <p className="font-semibold max-md:text-sm">
                    HAVE A PROBLEM? <br /> LET&apos;S SOLVE IT.
                </p>
                <ActionButton
                    text={`GET IN TOUCH`}
                    btnstyle={`bg-black cursor-pointer border-none flex justify-center items-center font-bold text-xs text-white gap-2 px-4 py-3 w-fit`}
                    iconcolor={"text-red-800"}
                    textstyle={""}
                />
            </div>

            {/* =============== FOOTER =============== */}
            <div className={`w-full h-50 bg-black`} id="footer">
                <div className="w-full h-[80%] grid grid-rows-5 md:grid-rows-1 md:grid-cols-5">
                    <div className="row-span-2 md:row-span-1 md:col-span-2 relative max-md:flex max-md:justify-center max-md:items-center">
                        <div className="md:absolute md:bottom-4 md:left-4 max-md:flex max-md:gap-3">
                            <Image src={"/wickland/logo.png"} width={100} height={50} alt="Logo" />
                            <p className="text-[#aaa7a7be] text-xs">
                                SOME CALL IT LUCK. <br /> I CALL IT SKILL
                            </p>
                        </div>
                    </div>

                    <div className="max-md:flex max-md:justify-center max-md:items-center max-md:gap-4 md:pl-4 md:pt-4">
                        <p className="text-sm text-white max-md:hidden">NAVIGATION</p>
                        <p className="text-[#aaa7a7be] text-xs md:my-1.5 cursor-pointer">
                            <a href="#hero">Home</a>
                        </p>
                        <p className="text-[#aaa7a7be] text-xs md:my-1.5 cursor-pointer">
                            <a href="#about">About</a>
                        </p>
                        <p className="text-[#aaa7a7be] text-xs md:my-1.5 cursor-pointer">
                            <a href="#services">Services</a>
                        </p>
                        <p className="text-[#aaa7a7be] text-xs md:my-1.5 cursor-pointer">
                            <a href="#chapters">Chapters</a>
                        </p>
                        <p className="text-[#aaa7a7be] text-xs md:my-1.5 cursor-pointer">
                            <a href="#footer">Contact</a>
                        </p>
                    </div>

                    <div className="max-md:flex max-md:justify-center max-md:items-center max-md:gap-2 md:pl-4 md:pt-4">
                        <p className="text-sm text-white max-md:hidden">CONTACT</p>
                        <p className="text-[#aaa7a7be] text-xs md:my-2">contact@wickland.com</p>
                        <p className="text-[#aaa7a7be] text-xs md:my-2">+1 000 111 2222</p>
                        <p className="text-[#aaa7a7be] text-xs md:my-2">New York, USA</p>
                    </div>
                </div>
                <div className="w-full h-[20%] flex justify-around items-center">
                    <p className="text-[#aaa7a7be] text-xs">@2026 Wick Solutions. All rights reserved</p>

                    <div className="flex items-center gap-6">
                        <p className="text-[#aaa7a7be] text-xs max-md:hidden">Privacy Policy</p>
                        <p className="text-[#aaa7a7be] text-xs max-md:hidden">Terms of Service</p>

                        <ScrollText className="md:hidden" color={"white"} strokeWidth={2} size={12} />
                        <Scale className="md:hidden" color={"white"} strokeWidth={2} size={12} />
                    </div>
                </div>
            </div>
        </>
    );
}
