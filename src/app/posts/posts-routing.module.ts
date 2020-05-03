import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostProfilePageComponent } from 'src/app/posts/pages/post-profile-page/post-profile-page.component';

const routes: Routes = [
  {
    path: 'posts/:postId',
    component: PostProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
