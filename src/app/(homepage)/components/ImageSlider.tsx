'use client';

import { Button } from '@/components/ui/button';
import useFetchGames from '@/hooks/useFetchGames';
import { SquareArrowLeftIcon, SquareArrowRightIcon } from 'lucide-react';
import { Fragment, useState } from 'react';
import ImageItem from './ImageItem';
import Link from 'next/link';

export default function ImageSlider() {
  const [index, setIndex] = useState<number>(0);
  const url = `https://api.rawg.io/api/games?key=32f39920893042d89a8b084b2b5af7ad&page_size=4`;
  const { data: games } = useFetchGames(url, 'slider');

  console.log(games);

  return (
    <main className="hidden sm:block w-full  relative h-[500px]">
      <div className="w-full h-full flex overflow-hidden relative rounded-sm">
        {games?.results.map((game, i: number) => (
          <Fragment key={game.id}>
            <ImageItem game={game} index={index} />
            {i === index && (
              <Link
                href={`/game/${game.slug}`}
                className="absolute flex gap-5 items-center bottom-10 left-10 "
              >
                <span className="font-bold text-3xl bg-primary p-2 rounded-md text-white">
                  {game.name}
                </span>
                <span className="bg-[#48B80F] p-2 text-white rounded-md text-xl">
                  {game.metacritic}
                </span>
              </Link>
            )}
          </Fragment>
        ))}
      </div>
      <Button
        className="absolute top-1/2 right-5"
        onClick={() => setIndex((index + 1) % games?.results.length)}
      >
        <SquareArrowRightIcon />
      </Button>
      <Button
        className="absolute top-1/2 left-5"
        disabled={index === 0}
        onClick={() => setIndex((index - 1) % games?.results.length)}
      >
        <SquareArrowLeftIcon />
      </Button>
    </main>
  );
}
