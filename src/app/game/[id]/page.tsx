'use client';

import MainContainer from '@/components/MainContainer';
import useFetchGames from '@/hooks/useFetchGames';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const GameSingle = () => {
  const params = useParams();
  const slug = params?.id;

  const url = `https://api.rawg.io/api/games?key=32f39920893042d89a8b084b2b5af7ad&search=${slug}`;
  const { data: game } = useFetchGames(url, 'game-game');

  const data = game?.results[0];

  console.log(data);

  return (
    <MainContainer>
      {data && (
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <section>
            <Image
              src={data?.background_image}
              alt={data?.id}
              height={400}
              width={400}
              className="h-[300px] w-full sm:max-w-xl md:max-w-md md:w-auto object-cover rounded-lg"
              unoptimized
            />
          </section>
          <section>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <div className="flex gap-0 sm:gap-10 mt-10 ">
              <div className="flex flex-col gap-2">
                <div>
                  <p className="font-bold text-gray-400">Release Date:</p>
                  <p> {data.released}</p>
                </div>
                <div>
                  <p className="font-bold text-gray-400">Genre: </p>
                  <p>{data.genres[0]?.name}</p>
                </div>
                <div>
                  <p className="font-bold text-gray-400">Platform:</p>
                  <p>
                    {data.parent_platforms[0]?.platform.name},{' '}
                    {data.parent_platforms[1]?.platform.name}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-gray-400">Tags:</p>
                  <p>
                    {data.tags[0]?.name}, {data.tags[1]?.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <span
                    className={
                      data.metacritic > 80
                        ? 'bg-[#48B80F] p-5 text-white font-bold rounded-md text-2xl'
                        : `bg-[#FFB301] p-5 text-white font-bold rounded-md text-2xl`
                    }
                  >
                    {data.metacritic ? data.metacritic : 'NA'}
                  </span>
                  <div>
                    <p className="font-bold">Metascore</p>
                    <p className="text-sm">Universal acclaim</p>
                    <p>Based on {data.reviews_count} reviews</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-4 items-center">
                    <span
                      className={
                        data.metacritic > 80
                          ? 'bg-[#48B80F] p-5 text-white font-bold rounded-full text-xl'
                          : `bg-[#FFB301] p-5 text-white font-bold rounded-full text-xl`
                      }
                    >
                      {data.metacritic ? data.metacritic / 2 : 'NA'}
                    </span>
                    <div>
                      <p className="font-bold">User score</p>
                      <p>Based on 0 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </MainContainer>
  );
};

export default GameSingle;
