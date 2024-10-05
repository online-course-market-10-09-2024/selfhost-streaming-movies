"use client";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils.";
import Link from "next/link";
import {HoverBorderGradient} from "components/ui/hover-border-gradient";

export const FloatingNav = ({
                                navItems,
                                className,
                            }: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        const direction = current! - scrollYProgress.getPrevious()!;
            console.log(direction)
        if (scrollYProgress.get() < 0) {
            setVisible(false);
        } else {
            if (direction <= 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: 0,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.5,
                }}
                className={cn(
                    "flex max-w-fit fixed top-5 inset-x-0 mx-5  dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-2  items-center justify-center space-x-4",
                    className
                )}
            >
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                    {navItems.map((navItem: any, idx: number) => (
                        <Link
                            key={`link=${idx}`}
                            href={navItem.link}
                            className={cn(
                                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                            )}
                        >
                            <span className="block max-w-sm:hidden">{navItem.icon}</span>
                            <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"/>
                            <span className="hidden sm:block text-xl">{navItem.name}</span>
                        </Link>
                    ))}
                </HoverBorderGradient>
            </motion.div>
        </AnimatePresence>
    );
};
