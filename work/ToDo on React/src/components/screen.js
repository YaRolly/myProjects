import { useState, useEffect } from "react";
import { isDesktopMedia, isMobileMedia } from "./const";

export  function useScreen() {
    const [screenSize, setScreenSize] = useState({width: document.documentElement.clientWidth, isMobile: false, isDesktop: false});
    
    useEffect(() => {
        function checkDeviseSize() {
            if (isMobileMedia.matches) {
                setScreenSize({width: document.documentElement.clientWidth, isMobile: true, isDesktop: false});
            } else if (isDesktopMedia) {
                setScreenSize({width: document.documentElement.clientWidth, isMobile: false, isDesktop: true});   
            }
        }
        window.addEventListener("resize", checkDeviseSize);
        return () => window.removeEventListener("resize", checkDeviseSize);
    })

    return screenSize;
}