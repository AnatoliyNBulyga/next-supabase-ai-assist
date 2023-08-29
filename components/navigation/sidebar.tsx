"use client";

import Link from "next/link";
import {Montserrat} from "next/font/google";
import {cn} from "@/lib/utils";
import { usePathname} from "next/navigation";
import FreeCounter from "@/components/free-counter";
import {BiConversation, BiMusic, BiVideo} from "react-icons/bi";
import {BsCode, BsImage} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {TbLayoutDashboard} from "react-icons/tb";
import {SiCodemagic} from "react-icons/si";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});


const routes = [
    {
        label: 'Dashboard',
        icon: TbLayoutDashboard,
        href: '/dashboard',
        color: "text-amber-200"
    },
    {
        label: 'Conversation',
        icon: BiConversation,
        href: '/conversation',
        color: "text-amber-200",
    },
    {
        label: 'Image Generation',
        icon: BsImage,
        color: "text-amber-200",
        href: '/image',
    },
    {
        label: 'Video Generation',
        icon: BiVideo,
        color: "text-amber-200",
        href: '/video',
    },
    {
        label: 'Music Generation',
        icon: BiMusic,
        color: "text-amber-200",
        href: '/music',
    },
    {
        label: 'Code Generation',
        icon: BsCode,
        color: "text-amber-200",
        href: '/code',
    },
    {
        label: 'Settings',
        icon: FiSettings,
        href: '/settings',
    },
];

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}

const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
}: SidebarProps) => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <SiCodemagic className="h-6 w-6 mr-3 text-amber-200" />
                    <h1 className={cn("text-xl font-bold", font.className)}>AI-ASSIST</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter
                apiLimitCount={apiLimitCount}
                isPro={isPro}
            />
        </div>
    );
};

export default Sidebar;