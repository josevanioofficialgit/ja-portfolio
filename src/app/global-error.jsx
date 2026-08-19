"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { House } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "JA Portfolio: Error",
    description: "Some error occured. Please, try again or contact the developer",
};

export default function GlobalError({ error, retry }) {
    return (
        <html lang="en" className={inter.className}>
            <body className="flex justify-center items-center">
                <div className="text-white font-mono">
                    {/* Error GIF */}
                    <div className="not_found_gif w-87.5 h-50 rounded-2xl mb-5 mx-auto"></div>

                    {/* Error message */}
                    <div className="text-center">
                        <h1 className="mb-3">Error - Something went wrong!</h1>
                        <button onClick={() => retry()} className="cursor-pointer bg-gray-900 p-2">
                            Please, try again...
                        </button>
                        <p>...or contact the developer at josevanioofficial@gmail.com</p>
                        <div className="text-center flex justify-center">
                            <a href={"/"} className="mt-6 flex items-center gap-2 text-green-300 mx-auto">
                                Come back Home! <House strokeWidth={4} size={14} className="text-amber-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
