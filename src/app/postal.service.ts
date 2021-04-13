import { Injectable } from '@angular/core';
import { Post } from './shared/types';

@Injectable({
  providedIn: 'root',
})
export class PostalService {
  constructor() {}

  async fetchPosts(): Promise<Post[]> {
    return await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    ).then((response) => response.json());
  }
}
