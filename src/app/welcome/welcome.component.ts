import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[app-welcome]',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent {
  @Output() onReady: EventEmitter<void>;

  constructor() {
    this.onReady = new EventEmitter<void>();
  }

  public onReadyClick(): void {
    this.onReady.emit();
  }
}
