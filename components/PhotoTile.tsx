import Image, { StaticImageData } from "next/image";

type PhotoTileProps = {
  src: StaticImageData;
  alt: string;
  caption: string;
  onClick?: () => void;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

const PhotoTile = ({
  src,
  alt,
  caption,
  onClick,
  className = "",
  imageClassName = "object-cover object-top",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority,
}: PhotoTileProps) => {
  const content = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
      <p className="absolute bottom-1/2 left-0 hidden w-full translate-y-1/2 transform text-center font-orpheus text-2xl text-white group-hover:inline-block md:text-3xl">
        {caption}
      </p>
      <div className="absolute top-0 left-0 z-20 h-full w-full translate-y-full transform bg-black opacity-20 transition-transform duration-700 ease-in-out group-hover:translate-y-0" />
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`Open ${alt}`}
        className={`group relative w-full overflow-hidden ${className}`}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={`group relative w-full overflow-hidden ${className}`}>
      {content}
    </div>
  );
};

export default PhotoTile;
