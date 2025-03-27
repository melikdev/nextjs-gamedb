import Image from 'next/image';

const ImageItem = ({ game, index }) => {
  return (
    <Image
      key={game.id}
      src={game.background_image}
      alt={game.id}
      height={400}
      width={400}
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out shrink-0 grow-0"
      style={{ translate: `${-100 * index}%` }}
      unoptimized
    />
  );
};

export default ImageItem;
