import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Lenis from "@studio-freight/lenis";
import Navbar from "../shared/Navbar";

const MainLayout = () => {

    // const location = useLocation();
    // const noHeaderFooter = location.pathname.includes('login');
    // const noHeaderFooter2 = location.pathname.includes('register');

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2, // Smooth scroll duration
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve
            direction: "vertical", // Smooth scroll direction ('vertical' or 'horizontal')
            smooth: true, // Enable smooth scrolling
        });

        // Request animation frame loop
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            // Cleanup on unmount
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-white dark:bg-zinc-900">
            <section>
                {/* {noHeaderFooter || <Navbar />} */}
                <Navbar />
            </section>
            {/* Smooth Scroll Container */}
            <section className="min-h-screen">
                <Outlet />
            </section>
            {/* {noHeaderFooter || <Footer />} */}
            <Footer />
        </div>
    );
};

export default MainLayout;
