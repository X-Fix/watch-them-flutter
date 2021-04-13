import { Component, OnInit } from '@angular/core';

import { PostalService } from '../postal.service';
import { Post } from '../shared/types';

@Component({
  selector: '[app-mailroom]',
  templateUrl: './mailroom.component.html',
  styleUrls: ['./mailroom.component.sass'],
})
export class MailroomComponent implements OnInit {
  public posts: Post[];

  constructor(private postalService: PostalService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.postalService.fetchPosts().then((posts) => {
      this.posts = posts;
    });
  }
}
