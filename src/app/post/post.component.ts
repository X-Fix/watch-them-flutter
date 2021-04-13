import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-post]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  @Input() public id?: number;
  @Input() public userId?: number;

  public isShowingId: boolean;
  public isFlipping: boolean;
  public fadeInStyles?: string;

  constructor() {
    this.isShowingId = true;
    this.isFlipping = false;
  }

  public ngOnInit(): void {
    this.fadeInStyles = `
      animation: arriving 1000ms ease-out ${(this.id || 0) * 5}ms;
    `;

    setTimeout(() => {
      // Override initial transform value once animation is over
      this.fadeInStyles = `transform: none;`;
    }, 900);
  }

  public flip(): void {
    this.isFlipping = true;

    setTimeout(() => {
      this.isShowingId = !this.isShowingId;
    }, 125); // Switch the displayed value half-way through 'flip' animation

    setTimeout(() => {
      // Remove 'animation' property after animation ends so you can re-apply it again to restart
      // it on next flip
      this.isFlipping = false;
    }, 250);
  }
}
