"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("09de6bc0-3270-4187-8d27-c2a58b7622ca")
    }, []);

    return null;
}