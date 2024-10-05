"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/nav/floating-navbar";
import {IconMovie, IconUser} from "@tabler/icons-react";
export function FloatingNavView() {
    const navItems_1 = [
        {
            name: "Movey",
            link: "/",
            icon: <IconMovie className="h-4 w-4 text-neutral-50 dark:text-white" />},
        {
            name: "Login",
            link: "/",
            icon: <IconUser className="h-4 w-4 text-neutral-50 dark:text-white" />,
        },
    ];
    return (
        <div className="flex flex-row w-full">
            <FloatingNav navItems={navItems_1} />
        </div>
    );
}
