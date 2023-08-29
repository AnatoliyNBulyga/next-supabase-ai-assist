"use client";

import {useEffect, useState} from "react";

const OnlyClient = ({ children }: { children: React.ReactNode}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (!isClient) return null;

    return (
        <>
            { children }
        </>
    );
};

export default OnlyClient;