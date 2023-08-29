"use client";

import {Button} from "@/components/ui/button";
import {Zap} from "lucide-react";
import axios from "axios";
import {useState} from "react";
import Loader from "@/components/loader";
import {toast} from "react-hot-toast";

interface SubscriptionButtonProps {
    isPro: boolean;
}
const SubscriptionButton = ({
    isPro = false
}: SubscriptionButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast.error("Something went wrong!")
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Button
            variant={isPro ? "default" : "premium"}
            onClick={onClick}
            disabled={isLoading}
        >
            {
                isPro ? "Manage Subscription" : "Upgrade"
            }
            {
                !isPro && <Zap className="w-4 h-4 ml-2 fill-white\" />
            }
        </Button>
    );
};

export default SubscriptionButton;