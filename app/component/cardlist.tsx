import React from "react";
import Image from 'next/image';
import user from "@/app/images/user.jpg";
import { StaticImageData } from "next/image";
interface CardProps {
    image: string | StaticImageData; // Adjusted to accommodate Next.js 'Image' component
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => (
    <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-xs">
        <div className="flex justify-center mb-4">
            <div className="bg-white rounded-full p-4 shadow-md">
                <Image src={image} alt={title} className="w-16 h-16" />
            </div>
        </div>
        <h2 className="font-bold text-xl text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
    </div>
);

const CardList: React.FC = () => {
    const cards: CardProps[] = [
        {
            image: user, // No curly braces here since it's a direct import
            title: "Meeting Agenda",
            description:
                "Waste less time in meetings by making them efficient and action-oriented.",
        },
        {
            image: user, // Replace with actual image paths
            title: "Project Tracker",
            description:
                "A central, organized place to keep track of every step in your team.",
        },
        {
            image: user, // Replace with actual image paths
            title: "Development Pipeline",
            description:
                "Keep your development team on track with an agile Kanban system.",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-around items-center gap-6 mt-10">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default CardList;
