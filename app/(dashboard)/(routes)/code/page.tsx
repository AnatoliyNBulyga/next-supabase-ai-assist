"use client"

import {useState} from "react";
import * as z from "zod";
import {Code} from "lucide-react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {useRouter} from "next/navigation";
import {ChatCompletionRequestMessage} from "openai";
import dynamic from 'next/dynamic';

import Heading from "@/components/heading";
import {
    Form,
    FormControl,
    FormField,
    FormItem, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { formSchema } from "./constants";
import Empty from "@/components/empty";
import Loader from "@/components/loader";
import {useProModal} from "@/hooks/use-pro-modal";
import {toast} from "react-hot-toast";
import OnlyClient from "@/components/only-client";

const DynamicCodeRender = dynamic(() => import('@/components/dynamic/code-render'), {
    loading: () => <Loader />,
});

const CodePage = () => {
    const proModal = useProModal();
    const router = useRouter();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt,
            };
            const newMessages = [...messages, userMessage]

            const response = await axios.post("/api/code", {
                messages: newMessages,
            });

            setMessages((current) => [...current, userMessage, response.data])

            form.reset();
        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen();
            }
            toast.error("Something went wrong")
        } finally {
            router.refresh();
        }
    }

    return (
        <OnlyClient>
            <Heading
                title="Code Generation"
                description="Generate code using descriptive text."
                icon={Code}
                iconColor="text-slate-700"
                bgColor="bg-slate-700/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg
                                border
                                w-full
                                p-4
                                px-3
                                md:px-6
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2
                              "
                        >
                            <FormField
                                name="prompt"
                                render={({field}) => (
                                   <FormItem className="col-span-12 lg:col-span-10">
                                       <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none
                                                focus-visible:ring-0
                                                focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Simple toggle button using react hooks."
                                                {...field}
                                            />
                                       </FormControl>
                                       <FormMessage />
                                   </FormItem>
                                )}
                            />
                            <Button
                                className="col-span-12 lg:col-span-2 w-full"
                                disabled={isLoading}
                            >Generate</Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {
                        isLoading && (
                            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                                <Loader />
                            </div>
                        )
                    }
                    {
                        messages.length === 0 && !isLoading && (
                            <Empty label="No code generated." />
                        )
                    }

                    <DynamicCodeRender messages={messages} />

                </div>
            </div>
        </OnlyClient>
    );
};

export default CodePage;