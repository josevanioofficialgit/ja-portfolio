import { Geist_Mono, Instrument_Sans, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Global_Context_Provider from "@/components/Global_Context_Provider";
import "./globals.css";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
    variable: "--font-instrument-sans",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
});

export const metadata = {
    title: "JA Portfolio",
    description: "Josevânio António's Web Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${instrumentSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
            <body>
                <Global_Context_Provider>{children}</Global_Context_Provider>
                <SpeedInsights />
            </body>
        </html>
    );
}
