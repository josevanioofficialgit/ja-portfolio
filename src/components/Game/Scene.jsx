"use client";
import { useRef } from "react";
import { useGlobal } from "@/components/Global_Context_Provider";

export default function Scene() {
    const gameCanvas = useRef();
    const { projectSection } = useGlobal();

    return <canvas ref={gameCanvas}></canvas>;
}
