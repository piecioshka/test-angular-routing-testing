import { Injectable } from '@angular/core';

import FIXTURE_POSTS from 'src/fixtures/posts.fixture.json';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  async getPosts() {
    return FIXTURE_POSTS;
  }

  async getPostById(postId: string) {
    return FIXTURE_POSTS.find((post) => post.id === postId);
  }
}
