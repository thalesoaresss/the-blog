import { JsonPostRepository } from './json-post.repository';
import { PostRepository } from './post.repository.interface';

export const postRepository: PostRepository = new JsonPostRepository();
