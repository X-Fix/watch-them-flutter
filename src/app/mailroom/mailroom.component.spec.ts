import { Component } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PostalService } from '../postal.service';
import { Post } from '../shared/types';

import { MailroomComponent } from './mailroom.component';

@Component({
  selector: '[app-post]',
  template: '',
  inputs: ['id', 'userId'],
})
class MockPostComponent {}

const mockReturn: Post[] = [{ id: 1, userId: 1 }];
const mockPostalService = {
  fetchPosts: () => Promise.resolve(mockReturn),
};

describe('MailroomComponent', () => {
  let component: MailroomComponent;
  let fixture: ComponentFixture<MailroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MailroomComponent, MockPostComponent],
      providers: [{ provide: PostalService, useValue: mockPostalService }],
    }).compileComponents();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(MailroomComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should fetch the post onInit', () => {
    const postSpy = spyOn(mockPostalService, 'fetchPosts').and.callThrough();
    fixture = TestBed.createComponent(MailroomComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    expect(postSpy).toHaveBeenCalledTimes(1);
  });

  it('should store the posts', fakeAsync(() => {
    spyOn(mockPostalService, 'fetchPosts').and.callThrough();

    fixture = TestBed.createComponent(MailroomComponent);
    component = fixture.componentInstance;

    component.ngOnInit();

    tick(1);
    fixture.detectChanges();
    expect(component.posts).toBe(mockReturn);
  }));
});
