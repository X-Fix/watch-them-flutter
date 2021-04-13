import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the id', () => {
    component.id = 1;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();

    expect(compiled.querySelector('button').innerText).toEqual(
      `${component.id}`
    );
  });

  it('should display the userId when clicked', fakeAsync(() => {
    component.userId = 1;
    component.flip();

    // Wait for the flip animation to end
    tick(250);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').innerText).toEqual(
      `${component.userId}`
    );
  }));
});
