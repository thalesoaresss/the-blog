import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function FeaturedPost() {
  const slug = 'qualquer-coisa';
  const postLink = `/post/${slug}`;

  return (
    <section
      className={clsx('grid grid-cols-1 gap-8 mb-16 group', 'sm:grid-cols-2')}
    >
      <PostCoverImage
        imageUrl='/images/bryen_0.png'
        linkUrl={postLink}
        alt='title'
      />
      <div className='flex flex-col gap-3 sm:justify-center'>
        <time className='text-slate-600 text-sm' dateTime='2026-06-22'>
          {' '}
          22/06/2026 18:17
        </time>
        <PostHeading url={postLink} as='h1'>
          Titulo do post
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          veniam. Eligendi, itaque exercitationem ipsam illum consequatur odit
          ex, harum voluptas blanditiis voluptate tempore quaerat recusandae
          quidem. Obcaecati numquam amet maxime.
        </p>
      </div>
    </section>
  );
}
