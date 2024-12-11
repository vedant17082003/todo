"use client";
import React from 'react'
import Image from 'next/image'
import hero from "/app/images/hero.avif"
import image2 from "/app/images/image2.avif"
import image4 from "/app/images/image4.png"
import Link from 'next/link';
import { Sticky } from "@/app/component/Sticky"
import { PlatformOptions } from "@/app/component/PlatformOption"
import { HeroScrollDemo } from './Scroll';
import ButtonGroup from './ButtonGroup';
import { GoogleGeminiEffectDemo } from "@/app/component/google"
import CardList from './cardlist';
import { AnimatedTooltipPreview } from "./tooltip"
import Footer from './Footer';


const Hero = () => {
    return (
        <div>
            <div className=' flex items-center justify-center px-20 mt-32 shadow-current-orange-500'>

                <Image
                    src={hero}// Replace with your image path
                    alt="YourLogo"
                    width={1200} // Adjust width as needed
                    height={1000}  // Adjust height as needed
                />
            </div>
            <div className='flex items-center justify-center mt-12'>
                <div className="relative flex items-center text-orange-500 text-4xl line-through mr-4">
                    Overwhelmed
                </div>
                <div className="text-white text-4xl font-bold">
                    On Top of It
                </div>

            </div>
            <div className='flex justify-center items-center mt-6'>
                <p className='text-xl text-center'>
                    Todoist makes it frictionless to get all your tasks out of your head and organized in one trusted place.
                </p>
            </div>
            <div className="flex justify-center items-center mt-10 mb-10">
                <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:from-orange-600 hover:to-orange-500 transition ease-in-out duration-300">
                    Start for free
                </button>
            </div>

            <Sticky />

            <div className=' flex items-center justify-center px-20 mt-0 shadow-current-orange-500'>
                <Image
                    src={image2}// Replace with your image path
                    alt="YourLogo"
                    width={800} // Adjust width as needed
                    height={600}  // Adjust height as needed
                />
            </div>

            <div className='flex flex-col items-center justify-center mt-20 text-center'>
                <div className="relative flex items-center text-orange-500 text-4xl font-bold mb-4">
                    In perfect sync across all your devices
                </div>
                <div className="flex justify-center items-center text-white text-xl max-w-xl">
                    With 10+ apps and add-ons, you’ll be able to review your upcoming tasks – and jot down new ones – no matter where you happen to be.
                </div>
            </div>
            <PlatformOptions />
            <HeroScrollDemo />
            <Sticky />

            <div className=' flex items-center justify-center px-20 mt-16 shadow-current-orange-500'>

                <Image
                    src={image4}
                    alt="YourLogo"
                    width={800}
                    height={800}
                />
            </div>
            <div className='flex flex-col items-center justify-center mt-4 text-center'>
                <div className="relative flex items-center text-orange-500 text-4xl font-bold mb-4">
                    Same project, flexible views
                </div>
                <div className="flex justify-center items-center text-white text-xl max-w-xl">
                    Switch between list, calendar, or board to easily plan and track even your most ambitious projects.
                </div>
            </div>
            <ButtonGroup />

            <div className='flex flex-col items-center justify-center mt-4 text-center'>
                <div className="relative flex items-center text-orange-500 text-4xl font-bold mb-4">
                    Same project, flexible views
                </div>
            </div>
            <CardList />
            <AnimatedTooltipPreview />
            <Footer />

        </div >

    )
}

export default Hero