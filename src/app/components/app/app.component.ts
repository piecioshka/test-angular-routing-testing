import { Component } from '@angular/core';

import DUMMY_POSTS from '../../../dummies/posts.dummy.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  postList = DUMMY_POSTS;
}
