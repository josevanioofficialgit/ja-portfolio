import ProjectBlock from "@/components/ProjectBlock.jsx";

// Main layout for mobile devices
// ProjectBlock - shows a miniature or a small block with image of the project

export default function DesktopBentoUI() {
    return (
        <div className="max-md:hidden grid grid-rows-12 w-full h-full gap-2 p-10">
            <div className="row-span-8 text-2xl text-white grid grid-cols-12 gap-1">
                <div className="max-md:row-span-4 md:col-span-4 p-2 md:p-4">
                    <ProjectBlock project={"WickLand"} projectId={1} cstyle={""} />
                </div>
                <div className="col-span-8 grid grid-rows-12 gap-1">
                    <div className="row-span-4">
                        <ProjectBlock project={"Soon"} projectId={2} cstyle={""} />
                    </div>

                    <div className="row-span-8 grid grid-cols-12 gap-1">
                        <div className="col-span-8 md:p-3">
                            <ProjectBlock project={"Ski Resort"} projectId={3} cstyle={""} />
                        </div>
                        <div className="col-span-4">
                            <ProjectBlock project={"Soon"} projectId={4} cstyle={""} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row-span-4 text-2xl text-white grid grid-cols-12 gap-1">
                <div className="col-span-8 min-w-0 overflow-hidden p-4">
                    <ProjectBlock project={"Soon"} projectId={5} cstyle={""} />
                </div>
                <div className="col-span-4">
                    <ProjectBlock project={"Soon"} projectId={6} cstyle={""} />
                </div>
            </div>
        </div>
    );
}
