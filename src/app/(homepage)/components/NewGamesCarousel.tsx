'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useFetchGames from '@/hooks/useFetchGames';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NewGamesCarousel = () => {
  const url = `https://api.rawg.io/api/games?key=32f39920893042d89a8b084b2b5af7ad&page_size=20&dates=2024-01-01,2025-12-31.1960-01-01,1969-12-31`;
  const { data: games, isLoading, isError } = useFetchGames(url, 'new-games');

  return (
    <main className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Newest Releases</h1>
        <p>View and review the newest releases</p>
      </div>
      <Carousel>
        <CarouselContent>
          {isLoading && <Loader2Icon className="animate-spin mx-auto w-full" />}
          {isError && <p>Error loading games</p>}
          {games?.results.map((game) => (
            <CarouselItem
              className="sm:basis-2/4 md:basis-1/4 relative"
              key={game.id}
            >
              <Link
                href={`/game/${game.slug}`}
                className="absolute bottom-2 flex justify-center w-full items-center"
              >
                <h1 className="text-xs sm:text-sm text-white bg-primary p-2 ">
                  {game.name}
                </h1>
              </Link>
              <Image
                src={game.background_image}
                alt={game.id}
                height={400}
                width={400}
                className="w-full h-full object-cover rounded-lg"
                unoptimized
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
};

export default NewGamesCarousel;
