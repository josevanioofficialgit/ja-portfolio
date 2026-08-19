"use client";
import { Car, Crosshair, ShieldAlert, FolderOpen } from "lucide-react";
import ActionButton from "./ActionButton";

// The card is used in the 'Services' section to show all services separated by a grid
export default function Card({ title, text1, text2 }) {
    return (
        <div className="mx-10 md:mx-0 xl:mx-2 2xl:mx-4 bg-[#fff7f3]">
            <div className="w-full h-full rounded flex flex-col justify-center items-center p-4">
                {title === "CONTRACTS" && <Crosshair color={"darkred"} strokeWidth={2} size={40} />}
                {title === "PROTECTION" && <ShieldAlert color={"darkred"} strokeWidth={2} size={40} />}
                {title === "EXTRACTIONS" && <Car color={"darkred"} strokeWidth={2} size={40} />}
                {title === "CONSULTING" && <FolderOpen color={"darkred"} strokeWidth={2} size={40} />}
                <p className="text-black text-sm font-bold my-2">{title}</p>

                <span className="text-center my-2">
                    <p className="text-[#000000be] text-xs font-semibold">{text1}</p>
                    <p className="text-[#000000be] text-xs font-semibold">{text2}</p>
                </span>

                <ActionButton
                    text={`LEARN MORE`}
                    btnstyle={`bg-transparent cursor-pointer border-b-2 border-b-red-800 flex justify-center items-center font-bold text-xs text-black gap-2 max-md:mt-6 py-0 mt-4 md:max-xl:gap-0`}
                    iconcolor={"text-red-900"}
                    textstyle={"md:max-xl:text-xxs"}
                />
            </div>
        </div>
    );
}
