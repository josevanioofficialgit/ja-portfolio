"use client";

import { createContext, useContext, useRef, useState } from "react";

const GlobalContext = createContext({});
export const useGlobal = () => useContext(GlobalContext);

export default function Global_Context_Provider({ children }) {
    // const loaderRef = useRef();
    // const hamburguerRef = useRef();
    // const sidebarRef = useRef();
    const modalBackdrop = useRef();
    const modalRef = useRef();
    // const [user, setUser] = useState();
    const projectSection = useRef([]);

    const value = {
        // loaderRef,
        // hamburguerRef,
        // sidebarRef,
        modalBackdrop,
        modalRef,
        // user,
        // setUser,
        projectSection,
    };
    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}
