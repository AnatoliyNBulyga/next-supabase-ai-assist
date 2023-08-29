import Image from "next/image";
import {SiCodemagic} from "react-icons/si";

const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">

                <SiCodemagic className="text-primary w-10 h-10 animate-spin" />

            <p className="text-sm text-muted-foreground">
                Genius is thinking...
            </p>
        </div>
    );
};

export default Loader;