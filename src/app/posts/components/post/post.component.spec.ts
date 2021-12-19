import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, Routes } from '@angular/router';

import { PostComponent } from './post.component';
import { FakeComponent } from 'src/fakes/fake.component';
import FIXTURE_POSTS from 'src/fixtures/posts.fixture.json';

const routes: Routes = [{ path: 'posts/:postId', component: FakeComponent }];

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [PostComponent],
      providers: [Location],
    }).compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('with defined post model,', () => {
    beforeEach(() => {
      component.post = FIXTURE_POSTS[0];
      fixture.detectChanges();
    });

    it('should run method after click on post image', () => {
      spyOn(component, 'goToPostProfile');
      fixture.debugElement
        .query(By.css('img'))
        .triggerEventHandler('click', {});
      expect(component.goToPostProfile).toHaveBeenCalled();
    });

    it('should have a link to po profile page', () => {
      const url = fixture.debugElement.query(By.css('.card-header a'))
        .nativeElement.href;
      expect(url).toMatch('/posts/');
    });

    it('should redirect to post profile page after click on date time link', fakeAsync(() => {
      fixture.nativeElement.querySelector('.card-header a').click();
      tick();
      expect(location.path()).toMatch('/posts/');
    }));

    it('should redirect to post profile page after click on post image', fakeAsync(() => {
      fixture.debugElement
        .query(By.css('img'))
        .triggerEventHandler('click', {});
      tick();
      expect(location.path()).toMatch('/posts/');
    }));
  });
});
