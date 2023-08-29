import React from 'react';
import {cn} from "@/lib/utils";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import {ChatCompletionRequestMessage} from "openai";

interface ConversationRenderProps {
    messages: ChatCompletionRequestMessage[]
}
const ConversationRender = ({ messages }: ConversationRenderProps) => {
    return (
        <div className="flex flex-col-reverse gap-y-4">
            {
                messages.map((message) => (
                    <div
                        key={message.content}
                        className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg",
                            message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                        )}
                    >
                        {
                            message.role === "user" ? <UserAvatar /> : <BotAvatar />
                        }
                        <p className="text-sm">
                            {message.content}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default ConversationRender;