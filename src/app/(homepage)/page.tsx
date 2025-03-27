import MainContainer from '@/components/MainContainer';
import BestGamesEverCarousel from './components/BestGamesEverCarousel';
import ImageSlider from './components/ImageSlider';
import NewGamesCarousel from './components/NewGamesCarousel';

export default function Home() {
  return (
    <MainContainer className="flex flex-col gap-10">
      <ImageSlider />
      <BestGamesEverCarousel />
      <NewGamesCarousel />
    </MainContainer>
  );
}
