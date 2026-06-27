import clsx from 'clsx';
import { PostCoverImage } from '../PostCoverImage';
import { PostSumary } from '../PostSumary';
import { findAllPublishedPostsCached } from '@/lib/post/queries';

export async function FeaturedPost() {
  const posts = await findAllPublishedPostsCached();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section
      className={clsx('grid grid-cols-1 gap-8 mb-16 group', 'sm:grid-cols-2')}
    >
      <PostCoverImage
        imageUrl={post.coverImageUrl}
        linkUrl={postLink}
        alt={post.title}
        priority={true}
      />

      <PostSumary
        postLink={postLink}
        postHeading='h1'
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
