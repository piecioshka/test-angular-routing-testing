import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './components/post-list/post-list.component';
import { PostProfilePageComponent } from './pages/post-profile-page/post-profile-page.component';
import { PostsRoutingModule } from 'src/app/posts/posts-routing.module';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [PostListComponent, PostProfilePageComponent, PostComponent],
  exports: [PostListComponent],
})
export class PostsModule {}
