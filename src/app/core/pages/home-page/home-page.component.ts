import { Component, OnInit } from '@angular/core';

import { PostList } from 'src/app/posts/interfaces/post-list.interface';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  postList: PostList = null;

  constructor(private postsService: PostsService) {}

  async ngOnInit() {
    this.postList = await this.postsService.getPosts();
  }
}
