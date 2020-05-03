import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { PostsModule } from 'src/app/posts/posts.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  imports: [BrowserModule, CoreRoutingModule, PostsModule],
  declarations: [AppComponent, HomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class CoreModule {}
