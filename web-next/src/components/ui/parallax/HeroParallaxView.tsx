"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/parallax/hero-parallax";

export function HeroParallaxView() {
    return <HeroParallax products={products} />;
}

export const products = [
    {
        title: "Inception",
        link: "https://www.warnerbros.com/movies/inception",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg",
    },
    {
        title: "Joker",
        link: "https://www.warnerbros.com/movies/shawshank-redemption",
        thumbnail:
            "https://cdn.prod.website-files.com/5f3018657d89143fcdfd49cf/5f5628f317dc1e1a1cbd8f1c_Joker_Version4_jpeg.jpg",
    },
    {
        title: "The Dark Knight",
        link: "https://www.warnerbros.com/movies/dark-knight",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/513/626/511/the-dark-knight-heath-ledger-movies-quote-wallpaper-preview.jpg",
    },
    {
        title: "Pulp Fiction",
        link: "https://www.miramax.com/movie/pulp-fiction",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/176/481/135/movie-pulp-fiction-wallpaper-preview.jpg",
    },
    {
        title: "The Godfather",
        link: "https://www.paramount.com/movies/godfather",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/259/269/201/godfather-marlon-brando-don-vito-corleone-black-wallpaper-preview.jpg",
    },
    {
        title: "Forrest Gump",
        link: "https://www.paramount.com/movies/forrest-gump",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/539/710/449/movies-forrest-gump-wallpaper-preview.jpg",
    },
    {
        title: "The Matrix",
        link: "https://www.warnerbros.com/movies/matrix",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/794/952/936/the-matrix-wallpaper-preview.jpg",
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        link: "https://www.warnerbros.com/movies/lord-rings-fellowship-ring",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/526/434/389/fantasy-fellowship-lord-lotr-wallpaper-preview.jpg",
    },
    {
        title: "Fight Club",
        link: "https://www.20thcenturystudios.com/movies/fight-club",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/874/819/824/edward-norton-brad-pitt-men-actor-fight-club-hd-wallpaper-preview.jpg",
    },
    {
        title: "Interstellar",
        link: "https://www.warnerbros.com/movies/interstellar",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg",
    },
    {
        title: "Endgame",
        link: "https://www.sonypictures.com/movies/socialnetwork",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/212/657/279/the-avengers-avengers-endgame-ant-man-avengers-endgame-black-widow-hd-wallpaper-preview.jpg",
    },
    {
        title: "300",
        link: "https://www.sonypictures.com/movies/gladiator",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/462/487/732/300-rise-of-an-empire-spartans-sparta-300-wallpaper-preview.jpg",
    },
    {
        title: "Avatar",
        link: "https://www.20thcenturystudios.com/movies/avatar",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/123/991/646/avatar-blue-skin-james-cameron-s-movie-avatar-movie-poster-wallpaper-preview.jpg",
    },
    {
        title: "The Silence of the Lambs",
        link: "https://www.mgm.com/movies/the-silence-of-the-lambs",
        thumbnail:
            "https://c4.wallpaperflare.com/wallpaper/359/95/733/crime-drama-hannibal-lambs-wallpaper-preview.jpg",
    },
];
