import { Injectable } from '@angular/core';

import DUMMY_POSTS from 'src/dummies/posts.dummy.json';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  async getPosts() {
    return DUMMY_POSTS;
  }

  async getPostById(postId: string) {
    return DUMMY_POSTS.find((post) => post.id === postId);
  }
}
