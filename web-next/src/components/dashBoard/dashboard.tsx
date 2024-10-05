import {SparklesView} from "components/ui/sparkle/sparkleView";
import {HeroParallaxView} from "components/ui/parallax/HeroParallaxView";

export const Dashboard = () => {
    return (
        <div className="p-4 bg-black min-h-screen w-full">
            <SparklesView />
            <HeroParallaxView />
        </div>
    );
};