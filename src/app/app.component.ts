import { Component } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public isUserReady: boolean;
  public isWelcomeFading: boolean;

  constructor() {
    this.isUserReady = false;
    this.isWelcomeFading = false;
  }

  public onReady(): void {
    this.isWelcomeFading = true;

    setTimeout(() => {
      this.isUserReady = true;
    }, 1000);
  }
}
