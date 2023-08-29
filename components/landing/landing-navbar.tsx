"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {SiCodemagic} from "react-icons/si";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-8 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <SiCodemagic className="h-6 w-6 mr-3 text-amber-200" />
                <p className={cn("text-xl font-bold text-white", font.className)}>AI-ASSIST</p>
            </Link>
        </nav>
    );
};

export default LandingNavbar;