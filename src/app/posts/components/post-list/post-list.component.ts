import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/posts/interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() postList: Post[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
