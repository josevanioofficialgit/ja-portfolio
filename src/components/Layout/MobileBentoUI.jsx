import ProjectBlock from "@/components/ProjectBlock.jsx";

// Main layout for mobile devices
// ProjectBlock - shows a miniature or a small block with image of the project

export default function MobileBentoUI() {
    return (
        <div className="md:hidden grid grid-cols-12 w-full h-full gap-2">
            <div className="col-span-4 text-2xl text-white grid grid-rows-12 gap-1">
                <div className="row-span-4 p-2 ">
                    <ProjectBlock project={"WickLand"} projectId={1} cstyle={""} />
                </div>
                <div className="row-span-8 gap-1 p-2 min-h-0 overflow-hidden">
                    <ProjectBlock project={"Soon"} projectId={5} cstyle={""} />
                </div>
            </div>

            <div className="col-span-8 text-2xl text-white grid grid-rows-12 gap-1">
                <div className="row-span-3 p-2">
                    <ProjectBlock project={"Soon"} projectId={2} cstyle={""} />
                </div>
                <div className="row-span-6">
                    <ProjectBlock project={"Soon"} projectId={3} cstyle={""} />
                </div>
                <div className="row-span-3 grid grid-cols-12 gap-1">
                    <div className="col-span-6 p-2">
                        <ProjectBlock project={"Soon"} projectId={4} cstyle={""} />
                    </div>
                    <div className="col-span-6">
                        <ProjectBlock project={"Soon"} projectId={6} cstyle={""} />
                    </div>
                </div>
            </div>
        </div>
    );
}
