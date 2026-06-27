import { PostCoverImage } from '../PostCoverImage';
import { PostSumary } from '../PostSumary';
import { findAllPublishedPosts } from '@/lib/post/queries';

export async function PostsList() {
  const posts = await findAllPublishedPosts();

  return (
    <div className='grid grid-cols-1 pb-16 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className='flex group flex-col gap-4'>
            <PostCoverImage
              imageUrl={post.coverImageUrl}
              linkUrl={postLink}
              alt={post.title}
            />

            <PostSumary
              postLink={postLink}
              postHeading='h2'
              createdAt={post.createdAt}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        );
      })}
    </div>
  );
}
