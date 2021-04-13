import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PostalService } from '../postal.service';
import { Post } from '../shared/types';

@Component({
  selector: '[app-mailroom]',
  templateUrl: './mailroom.component.html',
  styleUrls: ['./mailroom.component.sass'],
})
export class MailroomComponent implements OnInit {
  public posts: BehaviorSubject<Post[]>;

  constructor(private postalService: PostalService) {
    this.posts = new BehaviorSubject<Post[]>([]);
  }

  ngOnInit(): void {
    this.postalService.fetchPosts().then((posts) => {
      this.posts.next(posts);
    });
  }
}
