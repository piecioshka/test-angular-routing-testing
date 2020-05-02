import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/posts/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post = null;

  constructor() {}

  ngOnInit(): void {}

  getPostUrl() {
    return '/posts/' + this.post.id;
  }
}
