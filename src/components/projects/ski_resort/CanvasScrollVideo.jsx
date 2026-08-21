"use client";
import { useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

export default function CanvasScrollVideo() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    const frameCount = 6; // Match your extracted total frame count
    const [images, setImages] = useState([]);

    // Preload images into memory for lag-free rendering
    useEffect(() => {
        const loadedImages = [];
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            // Format number to match padded string format (e.g., frame_0001.jpg)
            const paddedIndex = String(i).padStart(4, "0");
            img.src = `/frames/f${i}.png`;
            loadedImages.push(img);
        }
        // setImages(loadedImages);
    }, []);

    // useGSAP(
    //     () => {
    //         if (images.length === 0) return;

    //         const canvas = canvasRef.current;
    //         const context = canvas.getContext("2d");

    //         // Set Canvas dimensions
    //         canvas.width = window.innerWidth;
    //         canvas.height = window.innerHeight;

    //         const airpods = { frame: 0 };

    //         // Update canvas function
    //         const render = () => {
    //             const img = images[Math.floor(airpods.frame)];
    //             if (img && img.complete) {
    //                 context.clearRect(0, 0, canvas.width, canvas.height);
    //                 context.drawImage(img, 0, 0, canvas.width, canvas.height);
    //             }
    //         };

    //         // Draw initial frame once loaded
    //         // images[0].onload = render;

    //         gsap.to(airpods, {
    //             frame: frameCount - 1,
    //             snap: "frame", // Snaps animation precisely to integer index values
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: containerRef.current,
    //                 start: "top top",
    //                 end: "+=4000",
    //                 scrub: 0.5,
    //                 pin: true,
    //             },
    //             onUpdate: render,
    //         });
    //     },
    //     { dependencies: [images], scope: containerRef },
    // );

    return (
        <div ref={containerRef} style={{ height: "100vh", width: "100%" }}>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
        </div>
    );
}
