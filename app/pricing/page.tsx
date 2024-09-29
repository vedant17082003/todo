"use client";
import React, { useState } from 'react';
import { Check, CircleArrowUp, CreditCard, Gem, Headset, Zap } from 'lucide-react';
import { cn } from '@/app/lib/utils';

const Pricing = () => {
    const [billPlan, setBillPlan] = useState<"monthly" | "annually">("monthly");

    const handleSwitch = () => {
        setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
    };

    const plans = [
        {
            id: 1,
            title: "Basic",
            priceMonthly: "$10",
            priceYearly: "$100",
            buttonText: "Choose Basic",
            features: ["Feature 1", "Feature 2", "Feature 3"],
        },
        {
            id: 2,
            title: "Standard",
            priceMonthly: "$20",
            priceYearly: "$200",
            buttonText: "Choose Standard",
            features: ["Feature A", "Feature B", "Feature C"],
        },
        {
            id: 3,
            title: "Premium",
            priceMonthly: "$30",
            priceYearly: "$300",
            buttonText: "Choose Premium",
            features: ["Feature X", "Feature Y", "Feature Z"],
        },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto text-white">
            <div className="absolute -bottom-1/4 -right-1/4 bg-orange-500 w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <div className="flex items-center space-x-2 border border-white rounded-full px-4 py-2">
                    <Gem className="w-4 h-4" />
                    <span className="text-sm">Choose your plan</span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                    Unlock the Right Plan for Your Business
                </h2>
                <p className="max-w-lg mt-6 text-center text-white">
                    Our pricing plans are designed to meet the needs of your business. Get started with our free plan and upgrade as you grow.
                </p>

                <div className="flex items-center justify-center space-x-4 mt-6">
                    <span className="text-base font-medium">Monthly</span>
                    <button
                        onClick={handleSwitch}
                        aria-label="Toggle billing plan"
                        className="relative rounded-full focus:outline-none"
                    >
                        <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-orange-600"></div>
                        <div
                            className={cn(
                                "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-200 ease-in-out top-1 left-1 rounded-full bg-white",
                                billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                            )}
                        />
                    </button>
                    <span className="text-base font-medium">Annually</span>
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 pt-8 lg:grid-cols-3 md:pt-12 lg:pt-16">
                {plans.map((plan) => (
                    <Plan key={plan.id} plan={plan} billPlan={billPlan} />
                ))}
            </div>

            <div className="flex items-center w-full mt-8 lg:justify-evenly flex-wrap justify-center gap-6 lg:mt-10">
                <div className="flex items-center gap-x-2">
                    <CreditCard className="w-5 h-5 text-orange-600" />
                    <span className="text-white">100 % secure payments</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <Headset className="w-5 h-5 text-orange-600" />
                    <span className="text-white">Dedicated customer support</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <CircleArrowUp className="w-5 h-5 text-orange-600" />
                    <span className="text-white">Regular updates & improvements</span>
                </div>
            </div>
        </div>
    );
};

const Plan: React.FC<{ plan: { id: number; title: string; priceMonthly: string; priceYearly: string; buttonText: string; features: string[] }; billPlan: "monthly" | "annually" }> = ({ plan, billPlan }) => {
    return (
        <div
            className={cn(
                "flex flex-col rounded-xl border cursor-pointer transition-all bg-black items-start w-full select-none",
                plan.title === "Standard" ? "border-white/60 hover:border-white" : "border-white/30 hover:border-white/50"
            )}
        >
            <div
                className={cn(
                    "p-4 md:p-8 flex flex-col items-start border-b border-white/30 w-full relative",
                    plan.title === "Standard" ? "bg-orange-500 rounded-t-xl" : "bg-orange-600 rounded-t-xl"
                )}
            >
                <span className="font-medium text-white">{plan.title} Plan</span>
                <h3 className="mt-4 text-2xl font-medium md:text-3xl">{billPlan === "monthly" ? plan.priceMonthly : plan.priceYearly}</h3>
                <span className="mt-2 text-white">{billPlan === "monthly" ? "per month" : "per year"}</span>
                {plan.title === "Standard" && (
                    <span className="absolute border border-white/60 bg-white/20 top-3 right-3 rounded-full px-3 py-1.5 text-xs text-orange-600">
                        Most Popular
                    </span>
                )}
            </div>
            <div className="flex flex-col items-start w-full p-5 gap-y-4">
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-start gap-2">
                        <div
                            className={cn(
                                "flex items-center justify-center w-5 h-5 rounded-full",
                                plan.title === "Standard" ? "bg-orange-500" : "bg-orange-600"
                            )}
                        >
                            <Zap
                                className={cn(
                                    "w-3 h-3",
                                    plan.title === "Standard" ? "text-white fill-white" : "text-white fill-white"
                                )}
                            />
                        </div>
                        <span className="text-white">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-start w-full px-4 pt-2 pb-5 md:pb-6 md:px-6">
                <button className={`w-full py-2 text-white rounded-md ${plan.title === "Standard" ? "bg-orange-500" : "bg-orange-400"}`}>
                    {plan.buttonText}
                </button>
                <span className="px-2 mt-4 text-sm text-white">No credit card required</span>
            </div>
        </div>
    );
};

export default Pricing;
