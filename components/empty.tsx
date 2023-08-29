import {PiBirdLight} from "react-icons/pi";

interface EmptyProps {
    label: string;
}

const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <PiBirdLight className="h-64 w-64 text-slate-700"/>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    );
};

export default Empty;