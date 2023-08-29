import {BiConversation, BiMusic, BiVideo} from "react-icons/bi";
import {BsCode, BsImage} from "react-icons/bs";

export const MAX_FREE_COUNTS = 5;

export const tools = [
    {
        label: 'Conversation',
        icon: BiConversation,
        href: '/conversation',
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        label: 'Music Generation',
        icon: BiMusic,
        href: '/music',
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: 'Image Generation',
        icon: BsImage,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: '/image',
    },
    {
        label: 'Video Generation',
        icon: BiVideo,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: '/video',
    },
    {
        label: 'Code Generation',
        icon: BsCode,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: '/code',
    },
];