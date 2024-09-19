"use client";
import React from "react";
import Image from 'next/image';
import user from "@/app/images/user.jpg"; // Importing a sample image
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip"; // Assuming this is a valid component

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: user,
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image: user, // Added image for Robert Johnson
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image: user,
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image: user,
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image: user,
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image: user,
    },
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-24">
            <AnimatedTooltip items={people} />
        </div>
    );
}
