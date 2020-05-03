import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostsService } from 'src/app/posts/services/posts.service';
import { Post } from 'src/app/posts/interfaces/post.interface';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.css'],
})
export class PostProfilePageComponent implements OnInit {
  post: Post = null;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  async ngOnInit() {
    const postId = this.route.snapshot.params.postId;
    this.post = await this.postsService.getPostById(postId);
  }
}
