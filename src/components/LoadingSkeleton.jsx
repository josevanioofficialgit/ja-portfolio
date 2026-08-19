import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Skeleton used to show a loading process -while the page is loading
export default function LoadingSkeleton() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="w-full h-full grid grid-cols-2 gap-4 p-10 md:p-28">
                <div className="bg-[#202020] rounded-2xl px-4 md:px-10 pt-32">
                    <Skeleton height={70} />
                </div>

                <div className="grid grid-rows-3 gap-3 rounded-2xl">
                    <div className="bg-[#202020] rounded-2xl px-4 md:px-20 pt-10">
                        <Skeleton height={40} />
                    </div>
                    <div className="bg-[#202020] rounded-2xl px-4 md:px-20 pt-10">
                        <Skeleton count={2} height={35} />
                    </div>

                    <div className="bg-[#202020] rounded-2xl px-4 md:px-20 pt-10">
                        <Skeleton count={2.5} height={25} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    );
}
