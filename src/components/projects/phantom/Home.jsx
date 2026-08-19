"use client";
import { useRef, useEffect, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./style.module.css";

export default function Home() {
    const [currentNav, setCurrentNav] = useState(0);

    return (
        <Parallax pages={3} className={`project_1`}>
            <ParallaxLayer offset={0} className={` ${styles.hero}`}>
                <p>Page 1</p>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} className={``}>
                <p>Page 2</p>
            </ParallaxLayer>
            <ParallaxLayer offset={2} className={``}>
                <p>Page 3</p>
            </ParallaxLayer>
        </Parallax>
    );
}
