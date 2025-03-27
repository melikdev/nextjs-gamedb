'use client';

import { fetchData } from '@/lib/fetch-data';
import { useQuery } from '@tanstack/react-query';

export default function FetchGames(url: string, queryKey: number | string) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['games', queryKey],
    queryFn: () => fetchData(url),
  });

  return { data, isLoading, isError, error };
}
