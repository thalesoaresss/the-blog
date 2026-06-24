import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { formatDateTime, formatRelativeDate } from '@/utils/format-datetime';

export async function PostsList() {
  const posts = await postRepository.findAllPosts();

  return (
    <div className='grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.map(post => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className='flex group flex-col gap-4'>
            <PostCoverImage
              imageUrl={post.coverImageUrl}
              linkUrl={postLink}
              alt={post.title}
            />

            <div className='flex flex-col gap-3 sm:justify-center'>
              <time
                className='text-slate-600 text-sm'
                dateTime={post.createdAt}
                title={formatRelativeDate(post.createdAt)}
              >
                {formatDateTime(post.createdAt)}
              </time>
              <PostHeading url={postLink} as='h2'>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
