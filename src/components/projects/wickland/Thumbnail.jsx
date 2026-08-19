"use client";

// The thumbnail is used to show the covers of the chapters of the comic book in the 'Chapters' section separated by a grid
export default function Thumbnail({ title, subtitle, styles }) {
    return (
        <div className={`${styles} p-2 rounded bg-red-950 relative border border-[#3d3b3bbe]`}>
            <div className="absolute bottom-2 left-2">
                <p className="text-white text-sm">{title}</p>
                <p className="text-[#aaa7a7be] text-xs">{subtitle}</p>
            </div>
        </div>
    );
}
