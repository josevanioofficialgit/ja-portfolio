"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import ActionButton from "./ActionButton";
import styles from "./style.module.css";

// The navigation bar
export default function Nav({ currentNav, setCurrentNav }) {
    const navItems = useRef([]);
    const [showMobileNav, setShowMobileNav] = useState(true);

    function updateNavState(item) {
        // navItems.current.forEach((elm, index) => {
        //     if(item === index)
        // })
        setCurrentNav(item);
    }

    return (
        <>
            <Menu
                onClick={() => setShowMobileNav((prev) => !prev)}
                color="#000000"
                strokeWidth={2.75}
                size={20}
                className="md:hidden absolute top-4 right-4 z-50 cursor-pointer"
            />

            {/* Logo -- shows on mobile only */}
            <Image className="absolute top-4 left-4 z-50 md:hidden" src={"/wickland/logo.png"} width={50} height={35} alt="Logo" />

            <div
                className={`${showMobileNav ? "" : "max-md:hidden"} absolute top-20 left-4 z-50 md:top-0 md:left-0 md:w-full md:h-12.5 md:flex md:justify-between md:items-center md:px-10 md:pt-6`}
                id="hero"
            >
                {/* Logo -- shows on ipads and desktops only */}
                <Image className="max-md:hidden" src={"/wickland/logo.png"} width={50} height={35} alt="Logo" />

                {/* flex-col md:flex-row md:justify-center md:items-center */}
                <div className={`flex flex-col md:flex-row md:justify-center md:items-center gap-6 xl:gap-10 ${styles.nav_items}`}>
                    <a
                        href="#hero"
                        onClick={() => updateNavState(0)}
                        ref={(el) => (navItems.current[0] = el)}
                        className={`${currentNav === 0 ? styles.active : ""}`}
                    >
                        HOME
                    </a>
                    <a
                        href="#about"
                        onClick={() => updateNavState(1)}
                        ref={(el) => (navItems.current[1] = el)}
                        className={`${currentNav === 1 ? styles.active : ""}`}
                    >
                        ABOUT
                    </a>
                    <a
                        href="#services"
                        onClick={() => updateNavState(2)}
                        ref={(el) => (navItems.current[2] = el)}
                        className={`${currentNav === 2 ? styles.active : ""}`}
                    >
                        SERVICES
                    </a>
                    <a
                        href="#chapters"
                        onClick={() => updateNavState(3)}
                        ref={(el) => (navItems.current[3] = el)}
                        className={`${currentNav === 3 ? styles.active : ""}`}
                    >
                        CHAPTERS
                    </a>
                    <a
                        href="#footer"
                        onClick={() => updateNavState(4)}
                        ref={(el) => (navItems.current[4] = el)}
                        className={`${currentNav === 4 ? styles.active : ""}`}
                    >
                        CONTACT
                    </a>
                </div>

                {/* Action button */}
                <ActionButton
                    text={`LET'S TALK`}
                    btnstyle={
                        "bg-red-700 md:bg-transparent cursor-pointer border-0 md:border-2 md:border-black rounded flex justify-center items-center font-bold text-xs p-2 xl:py-3 xl:px-4 text-white md:text-black gap-2 max-md:mt-6"
                    }
                    iconcolor={"text-white md:text-red-800"}
                    textstyle={""}
                />
            </div>
        </>
    );
}
