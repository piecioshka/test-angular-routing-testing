import { Component, OnInit, Input } from '@angular/core';

import { PostList } from 'src/app/posts/interfaces/post-list.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() postList: PostList = null;

  constructor() {}

  ngOnInit(): void {}
}
