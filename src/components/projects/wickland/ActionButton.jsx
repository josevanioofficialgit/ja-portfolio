"use client";
import { ArrowRight } from "lucide-react";

// This button is used to take the user somewhere like the contact page... however because it is added in a sample project, it doesnt take him anywhere
export default function ActionButton({ text, btnstyle, iconcolor, textstyle }) {
    return (
        <div className={`${btnstyle}`}>
            <small className={textstyle}>{text}</small>
            <ArrowRight className={iconcolor} strokeWidth={2} size={12} />
        </div>
    );
}
