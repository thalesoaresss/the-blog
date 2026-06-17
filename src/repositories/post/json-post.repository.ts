import { PostRepository } from './post.repository';
const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  async findAllPosts() {
    const response = await fetch('/posts.json');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    return posts;
  }
}

export const postRepository = new JsonPostRepository();
