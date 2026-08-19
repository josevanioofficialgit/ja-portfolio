"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function RecommediaMini({ blockRef }) {
    const [imgWidth, setImgWidth] = useState();
    const [imgHeight, setImgHeight] = useState();
    const row1 = [
        "/recommedia/music/album_drake.jfif",
        "/recommedia/music/album_travisscott.jfif",
        "/recommedia/music/coldplay.webp",
        "/recommedia/music/kanyewest.jfif",
        // "/recommedia/music/kendricklamar.jfif",
        // "/recommedia/music/norahjones.jpg",
        // "/recommedia/music/sia.jfif",
        "/recommedia/music/skylergrey.png",
        // "/recommedia/music/soad.jfif",
        "/recommedia/music/tayloerswift.webp",
        "/recommedia/anime/deathnote.webp",
        "/recommedia/anime/hellsing.jfif",
        "/recommedia/anime/monster.jfif",
        "/recommedia/anime/naruto.jpg",
    ];
    const row2 = [
        "/recommedia/tv_shows/blacklist.jpg",
        "/recommedia/tv_shows/breakingbad.jpg",
        "/recommedia/tv_shows/dexter.jpg",
        "/recommedia/tv_shows/houseofcards.jfif",
        "/recommedia/tv_shows/peakyblinders.jpg",
        "/recommedia/tv_shows/sopranos.jpg",
        "/recommedia/tv_shows/thepenguim.jpg",
        "/recommedia/movies/avengers.jpg",
        "/recommedia/movies/inception.jpg",
        "/recommedia/movies/anthropoid.png",
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
