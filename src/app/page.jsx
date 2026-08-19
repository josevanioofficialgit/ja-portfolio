import DesktopBentoUI from "@/components/Layout/DesktopBentoUI";
import MobileBentoUI from "@/components/Layout/MobileBentoUI";
import GlobalNav from "@/components/Layout/GlobalNav";

export default async function Home() {
    return (
        <>
            <MobileBentoUI />
            <DesktopBentoUI />
            <GlobalNav />
        </>
    );
}
