import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type PostCoverImageProps = {
  linkUrl: string;
  imageUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  alt: string;
  priority?: boolean;
  className?: {
    image?: string;
    link?: string;
  };
};

export function PostCoverImage({
  linkUrl,
  imageUrl,
  alt,
  priority = false,
  className,
  imageWidth = 1200,
  imageHeight = 720,
}: PostCoverImageProps) {
  return (
    <Link
      href={linkUrl}
      className={clsx(
        'w-full h-full overflow-hidden rounded-xl',
        className?.link,
      )}
    >
      <Image
        className={clsx(
          'group-hover:scale-105',
          'transition',
          'w-full',
          'h-full',
          'object-cover',
          'object-center',
          className?.image,
        )}
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        alt={alt}
        priority={priority}
      />
    </Link>
  );
}
