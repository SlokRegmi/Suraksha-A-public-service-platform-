"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Skeleton } from "./skeleton"; // Import the Skeleton component

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 md:h-52 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mx-auto">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate data loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Assume it takes 2 seconds to load the data
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full">
      {loading
        ? [...Array(8)].map((_, index) => (
            <Skeleton key={index} className="h-40 md:h-52 w-full rounded-xl" />
          )) // Render 8 skeleton placeholders while loading
        : cards.map((card, index) => (
            <Link href="" key={card.title}>
              <Card
                card={card}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            </Link>
          ))}
    </div>
  );
}
