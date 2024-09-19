import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { AiOutlineUnorderedList, AiOutlineCalendar, AiOutlineAppstore } from 'react-icons/ai'; // Importing icons from React Icons

// Import images directly
import list from '@/app/images/list.png';
import calendar from '@/app/images/calendar.png';
import board from '@/app/images/board.png';

type ImageKeys = 'list' | 'calendar' | 'board';

const ButtonGroup: React.FC = () => {
    // Set the 'list' image as the default image
    const [selectedImage, setSelectedImage] = useState<string>(list.src);

    // Use the imported images in the mapping
    const images: Record<ImageKeys, StaticImageData> = {
        list,
        calendar,
        board,
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
            {/* Button Group */}
            <div className="flex space-x-6">
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
                    onClick={() => setSelectedImage(images.list.src)}
                >
                    <AiOutlineUnorderedList size={24} />
                    <span>List</span>
                </button>
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
                    onClick={() => setSelectedImage(images.calendar.src)}
                >
                    <AiOutlineCalendar size={24} />
                    <span>Calendar</span>
                </button>
                <button
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200"
                    onClick={() => setSelectedImage(images.board.src)}
                >
                    <AiOutlineAppstore size={24} />
                    <span>Board</span>
                </button>
            </div>

            {/* Image Display */}
            <div className="mt-6">
                {selectedImage && (
                    <div className="rounded-lg overflow-hidden border border-gray-400">
                        <Image
                            src={selectedImage}
                            alt="Selected"
                            width={1200} // Increased the image size
                            height={1200}
                            className="rounded-lg" // Tailwind class for rounded border
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ButtonGroup;

