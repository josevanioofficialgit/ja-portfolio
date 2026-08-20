"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function RecommediaMini({ blockRef }) {
    const [imgWidth, setImgWidth] = useState();
    const [imgHeight, setImgHeight] = useState();
    const row1 = [
        "/recommedia/music/album_drake.webp",
        "/recommedia/music/album_travisscott.webp",
        "/recommedia/music/coldplay.webp",
        "/recommedia/music/kanyewest.webp",
        // "/recommedia/music/kendricklamar.webp",
        // "/recommedia/music/norahjones.webp",
        // "/recommedia/music/sia.webp",
        "/recommedia/music/skylergrey.webp",
        // "/recommedia/music/soad.webp",
        "/recommedia/music/tayloerswift.webp",
        "/recommedia/anime/deathnote.webp",
        "/recommedia/anime/hellsing.webp",
        "/recommedia/anime/monster.webp",
        "/recommedia/anime/naruto.webp",
    ];
    const row2 = [
        "/recommedia/tv_shows/blacklist.webp",
        "/recommedia/tv_shows/breakingbad.webp",
        "/recommedia/tv_shows/dexter.webp",
        "/recommedia/tv_shows/houseofcards.webp",
        "/recommedia/tv_shows/peakyblinders.webp",
        "/recommedia/tv_shows/sopranos.webp",
        "/recommedia/tv_shows/thepenguim.webp",
        "/recommedia/movies/avengers.webp",
        "/recommedia/movies/inception.webp",
        "/recommedia/movies/anthropoid.webp",
    ];

    useEffect(() => {
        const parentDivWidth = blockRef.current.getBoundingClientRect().width;
        const parentDivHeight = blockRef.current.getBoundingClientRect().height;

        if (parentDivWidth && parentDivHeight) {
            if (window.matchMedia("(min-width: 760px)").matches) {
                setImgWidth((parentDivWidth / 10).toFixed(0));
                setImgHeight((parentDivHeight / 4).toFixed(0));
            } else {
                setImgWidth(50);
                setImgHeight(35);
            }
        }
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-center relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl overlay_backgrd z-20"></div>
            <Marquee className="hide_scrollbar rounded-t-2xl">
                {imgWidth &&
                    row1.map((src, index) => (
                        <Image key={index} src={src} width={imgWidth} height={imgHeight} className="m-2.5" alt="anime_merged" />
                    ))}
            </Marquee>
            <Marquee className="hide_scrollbar rounded-b-2xl" direction="right">
                {imgWidth &&
                    row2.map((src, index) => (
                        <Image key={index} src={src} width={imgWidth} height={imgHeight} className="mx-2.5" alt="anime_merged" />
                    ))}
            </Marquee>
        </div>
    );
}
