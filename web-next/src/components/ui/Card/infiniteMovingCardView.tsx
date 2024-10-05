"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/Card/infinite-moving-cards";

export function InfiniteMovingCardView() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative ">
            <InfiniteMovingCards
                items={movies}
                direction="right"
                speed="slow"
            />
        </div>
    );
}

const movies = [
    {
        title: "A Tale of Two Cities",
        description: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        thumbnail: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" // Add the actual image URL here
    },
    {
        title: "Hamlet",
        description: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        thumbnail: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" // Add the actual image URL here
    },
    {
        title: "A Dream Within a Dream",
        description: "All that we see or seem is but a dream within a dream.",
        thumbnail: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" // Add the actual image URL here
    },
    {
        title: "Pride and Prejudice",
        description: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        thumbnail: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" // Add the actual image URL here
    },
    {
        title: "Moby-Dick",
        description: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        thumbnail: "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg" // Add the actual image URL here
    },
];

