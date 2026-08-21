"use client";
import { useRef, useEffect, useState } from "react";
import { Lock } from "lucide-react";
import ProjectDisplay from "@/components/ProjectDisplay";
import Video from "@/components/Video";
import CupHeadMiniature from "@/components/projects/cuphead/CupHeadMiniature";
import RecommediaMini from "@/components/projects/recommedia/RecommediaMini";

// Matchs the background of any miniature or rectangle in the Bento Grid with its own project
function matchBackground(id) {
    switch (id) {
        case 1:
            return "cartooland_miniature";
        case 2:
            return "game_2d_miniature";
        case 3:
            return "ski_resort_miniature";
        case 4:
            return "ecommerce_miniature";
        case 5:
            return "recommedia_miniature";
        case 6:
            return "chat_miniature";
        default:
            return "";
    }
}

function projectDescription(id) {
    switch (id) {
        case 1:
            return "Sample Project - Comic books ";
        case 2:
            return "game_2d_miniature";
        case 3:
            return "ski_resort_miniature";
        case 4:
            return "ecommerce_miniature";
        case 5:
            return "recommedia_miniature";
        case 6:
            return "chat_miniature";
        default:
            return "";
    }
}

export default function ProjectBlock({ project, projectId, cstyle }) {
    const [isLoaded, setIsLoaded] = useState();
    const [display, setDisplay] = useState();
    const blockRef = useRef();

    useEffect(() => {
        (() => {
            setIsLoaded(true);
        })();
    }, []);

    return (
        <>
            {display && <ProjectDisplay project={project} projectId={projectId} setDisplay={setDisplay} />}

            <div
                ref={blockRef}
                onClick={() => {
                    if (project !== "Soon") setDisplay(project);
                }}
                className={`bg-[#121212] relative rounded-2xl w-full h-full transition-shadow duration-1000 ease-in-out ${project !== "Soon" ? "hover:scale-105 hover:transition-transform hover:duration-300 hover:ease-in-out cursor-pointer" : ""}  ${matchBackground(projectId)} ${isLoaded ? "shadow-2xl shadow-black" : "shadow-none"} ${cstyle}`}
            >
                <div className="absolute top-2 left-2 z-30">
                    <small
                        className={`${project !== "Soon" ? "bg-orange-500" : ""} text-white rounded-full px-3 text-[10px] md:text-xs font-bold font_geist_mono flex items-center gap-2`}
                    >
                        {project}
                        {project === "Soon" && <Lock color="#ffffff" strokeWidth={4} size={12} />}
                    </small>
                </div>

                {project === "Soon" && <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overlay_backgrd_soon z-20"></div>}

                {/* For the Bento blocks or grid, some projects needed only a background image hence the use of the matchBackground() functions, but others such as these below required more than just a simple background image. */}
                {projectId === 2 && <CupHeadMiniature />}
                {/* {projectId === 3 && <Video src={"/ski_resort/hero_video.mp4"} />} */}
                {projectId === 5 && <RecommediaMini blockRef={blockRef} />}
            </div>
        </>
    );
}
