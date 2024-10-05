"use client";
import {cn} from "@/lib/utils.";
import Image from "next/image";
import {InfiniteMovingCards, InfiniteMovingCardsType, movieType} from "components/ui/Card/infinite-moving-cards";

interface MovieCardProps {
    movie: movieType
}

export function MovieCard(movie: MovieCardProps) {
    return (
        <div className="max-w-xs w-full group/card">
            <div
                className={cn(
                    " cursor-pointer overflow-hidden relative card rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
                )}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

                <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                        {movie.movie.title}
                    </h1>
                    <p className="text-sm text-gray-50 relative z-10 my-4">
                        {movie.movie.description}
                    </p>
                </div>
            </div>
        </div>
    );
}
