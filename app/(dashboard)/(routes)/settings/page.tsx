import Heading from "@/components/heading";
import {Settings} from "lucide-react";
import {checkSubscription} from "@/lib/subscription";
import SubscriptionButton from "@/components/subscription-button";
import {FiSettings} from "react-icons/fi";

const SettingsPage = async () => {
    const isPro = await checkSubscription();

    return (
        <div>
            <Heading
                title="Settings"
                description="Manage account settings"
                icon={FiSettings}
                iconColor="text-slate-700"
                bgColor="bg-slate-700/10"
            />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-muted-foreground text-sm">
                    {
                        isPro
                            ? "You are currently on a pro plan."
                            : "You are currently on a free plan."
                    }
                </div>
                <SubscriptionButton isPro={isPro} />
            </div>
        </div>
    );
};

export default SettingsPage;