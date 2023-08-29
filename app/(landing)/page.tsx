"use client";

import LandingNavbar from "@/components/landing/landing-navbar";
import LandingHero from "@/components/landing/landing-hero";
import {useEffect, useState} from "react";
import {SiCodemagic} from "react-icons/si";


const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) return (
        <div className="h-full w-full fixed top-0 left-0 flex justify-center items-center">
            <SiCodemagic className="text-primary w-10 h-10 animate-spin" />
        </div>
    )

    return (
        <div className="h-full">
            <LandingNavbar />
            <LandingHero />
        </div>
    );
};

export default LandingPage;