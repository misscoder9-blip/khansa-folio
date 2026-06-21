"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to the top of the window
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Use instant key to prevent smooth scrolling delay which might feel like it's not working
        });
    }, [pathname]);

    return null;
}
