import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from 'src/app/posts/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  [x: string]: {};
  @Input() post: Post = null;
  component: {};

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getPostUrl() {
    return '/posts/' + this.post.id;
  }

  goToPostProfile() {
    this.router.navigate(['/posts/' + this.post.id]);
  }
}
