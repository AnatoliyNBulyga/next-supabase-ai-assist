import React from 'react';
import {Card, CardFooter} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";

interface ImageRender {
    images: string[]
}
const ImageRender = ({ images }: ImageRender) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-3 xl:grid-cols-4 gap-4 mt-8">
            {
                images.map((src) => (
                    <Card
                        key={src}
                        className="rounded-lg overflow-hidden"
                    >
                        <div className="relative aspect-square">
                            <Image
                                alt="Image"
                                fill
                                src={src}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <CardFooter className="p-2">
                            <Button
                                onClick={() => window.open(src)}
                                variant="secondary"
                                className="w-full"
                            >
                                <Download className="h-4 w-4 mr-2"/>
                                Download
                            </Button>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    );
};

export default ImageRender;