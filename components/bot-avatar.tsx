import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {SiCodemagic} from "react-icons/si";

const BotAvatar = () => {
    return (
        <Avatar className="h-8 w-8">
            <SiCodemagic className="p-1 text-primary w-10 h-10" />
        </Avatar>
    );
};

export default BotAvatar;