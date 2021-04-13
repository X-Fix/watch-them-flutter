import { TestBed } from '@angular/core/testing';

import { PostalService } from './postal.service';

describe('PostalService', () => {
  let service: PostalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the post(s)', () => {
    const fetchSpy = spyOn(window, 'fetch').and.resolveTo({
      json: () => Promise.resolve(),
    } as Response);

    service.fetchPosts();

    expect(fetchSpy).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts'
    );
  });
});
