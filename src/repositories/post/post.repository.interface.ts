import { PostModel } from '@/models/post/post.model';

export interface PostRepository {
  findAllPublishedPosts(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
