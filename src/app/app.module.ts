import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MailroomComponent } from './mailroom/mailroom.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MailroomComponent,
    PostComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
