"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/Input/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputView() {
    const placeholders = [
        "What's your favorite movie?",
        "Who is your favorite movie character?",
        "What's the best movie you've seen this year?",
        "Name a movie that made you cry.",
        "What's the most overrated movie in your opinion?",
    ];
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className="h-[20rem] flex flex-col justify-end items-center px-4">
            <h2 className="mb-5 sm:mb-10 text-2xl font-bold text-center sm:text-5xl dark:text-white text-black">
                Let Find You Next Favorite Movie
            </h2>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}
