"use client"

import {useState} from "react";
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {useRouter} from "next/navigation";

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
import {BiMusic} from "react-icons/bi";
import OnlyClient from "@/components/only-client";

const MusicPage = () => {
    const proModal = useProModal();
    const router = useRouter();
    const [music, setMusic] = useState<string>("")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setMusic("")

            const response = await axios.post("/api/music", values);

            setMusic(response.data.audio);

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
                title="Music"
                description="Turn your prompt into music."
                icon={BiMusic}
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
                                                placeholder="Piano solo"
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
                        !music && !isLoading && (
                            <Empty label="No music generated." />
                        )
                    }
                    {
                        music && (
                            <audio controls className="w-full mt-8">
                                <source src={music} />
                            </audio>
                        )
                    }
                </div>
            </div>
        </OnlyClient>
    );
};

export default MusicPage;