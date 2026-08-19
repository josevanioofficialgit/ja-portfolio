"use client";
import { useRef, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useGlobal } from "@/components/Global_Context_Provider";
import WickLand from "@/components/projects/wickland/Home";

// Model used to display each project in a bigger view after clicking the miniature
export default function ProjectDisplay({ project, projectId, setDisplay }) {
    const { modalBackdrop } = useGlobal();

    return (
        <>
            <div
                ref={modalBackdrop}
                className="absolute top-0 bottom-0 left-0 right-0 z-50 fade_In_animation bg-black/10 backdrop-blur-sm"
                id="map_blur_cover"
            ></div>

            <div className="fixed top-5 left-5 right-5 bottom-5 md:top-20 md:left-20 md:right-20 md:bottom-20 xl:top-10 xl:bottom-10 z-50 bg-black rounded-xl">
                {/* Top */}
                <div className="bg-[#232323] w-full h-10 rounded-t-xl flex justify-between items-center px-12">
                    <div
                        onClick={() => {
                            modalBackdrop?.current?.classList.replace("fade_In_animation", "fade_Out_animation");
                            setTimeout(() => {
                                setDisplay(false);
                            }, 200);
                        }}
                        className="rounded-full w-4.5 h-4.5 bg-red-400 cursor-pointer flex justify-center items-center"
                    >
                        <X color="#5a0c0c" strokeWidth={2.75} size={12} />
                    </div>

                    <p>{project}</p>

                    <div></div>
                </div>

                {/* Main section */}
                <div
                    className={`bg-black w-full h-[calc(100%-40px)] rounded-b-xl relative overflow-auto ${[1].includes(projectId) ? "hide_scrollbar" : ""}`}
                >
                    {projectId === 1 && <WickLand />}
                    {/* <Phantom /> */}
                </div>
            </div>
        </>
    );
}
