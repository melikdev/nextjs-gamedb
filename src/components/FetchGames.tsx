'use client';

import { fetchData } from '@/lib/fetch-data';
import { useQuery } from '@tanstack/react-query';

type FetchProps = {
  gameName: string;
};

export default function FetchGames({ gameName }: FetchProps) {
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['games'],
    queryFn: () =>
      fetchData(
        `https://api.rawg.io/api/games?key=f701ece808db4789848e0250057c99c1&search=${gameName}&`
      ),
  });

  console.log(games);

  return (
    <main>
      {isLoading && <div className="mb-4 text-blue-500">Loading...</div>}
      {isError && (
        <div className="mb-4 text-red-500">Error: {error.message}</div>
      )}
    </main>
  );
}
