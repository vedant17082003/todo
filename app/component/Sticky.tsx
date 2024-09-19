"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import image from "/app/images/image1.png"

const content = [

    {
        title: "Capture tasks at the speed of thought",
        description:
            "We’ve spent over a decade refining how people add tasks to Todoist. Our goal? To make a to-do list that feels like a natural extension of your mind..",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image
                    src={image}
                    width={1200} // Increased size
                    height={1200} // Increased size
                    className="h-72 w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Todos",
        description:
            "“Todoist gives me the peace of mind knowing I am doing exactly what I need to do, exactly when I need to do it.”"
    },
];

export function Sticky() {
    return (
        <div className="p-10 bg-black overflow-hidden"> {/* Set background to black and removed scrollbar */}
            <StickyScroll content={content} />
        </div>
    );
}
