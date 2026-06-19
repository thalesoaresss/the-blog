import { PostModel } from '@/models/post/post.model';

export interface PostRepository {
  findAllPosts(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
