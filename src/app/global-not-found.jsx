import "./globals.css";
import { Inter } from "next/font/google";
import { House } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "JA Portfolio: 404 - Page Not Found",
    description: "The website url is valid, but the page you are looking for does not exist.",
};

export default function GlobalNotFound() {
    return (
        <html lang="en" className={inter.className}>
            <body className="flex justify-center items-center">
                <div className="text-white font-mono">
                    {/* Not found GIF */}
                    <div className="not_found_gif w-87.5 h-50 rounded-2xl mb-5 mx-auto"></div>

                    {/* Not found message */}
                    <div className="text-center">
                        <h1>404 - Page Not Found</h1>
                        <p>This page does not exist.</p>

                        <div className="text-center flex justify-center">
                            <a href={"/"} className="mt-6 flex items-center gap-2 text-green-300 text-center">
                                Come back Home! <House strokeWidth={4} size={14} className="text-amber-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
