import { formatDateTime, formatRelativeDate } from '@/utils/format-datetime';
import { PostHeading } from '../PostHeading';

type PostSumaryProps = {
  postHeading: 'h1' | 'h2';
  postLink: string;
  createdAt: string;
  title: string;
  excerpt: string;
};

export function PostSumary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSumaryProps) {
  return (
    <div className='flex flex-col gap-3 sm:justify-center'>
      <time
        className='text-slate-600 text-sm'
        dateTime={createdAt}
        title={formatRelativeDate(createdAt)}
      >
        {formatDateTime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  );
}
