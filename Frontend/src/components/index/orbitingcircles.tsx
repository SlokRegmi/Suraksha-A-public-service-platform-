import OrbitingCircles from "@/components/ui/orbiting-circles";
import Image from "next/image";
export function OrbitingCirclesPublic() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Society
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[80px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <Image src="/nepalpolice.png" alt="alt" width={80} height={80} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[40px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <Image src="/redcross.png" alt="alt" width={40} height={40} />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[80px] border-none bg-transparent"
                radius={190}
                duration={20}
                reverse
            >
                <Image src="/gov.png" alt="alt" width={80} height={80} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[80px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={20}
                reverse
            >
                <Image src="/lmc.png" alt="alt" width={80} height={80} />
            </OrbitingCircles>

        </div>
    );
}

