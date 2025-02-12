import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TweetComposerComponent } from './app/tweet-composer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TweetComposerComponent],
  template: `
    <div class="app-container">
      <app-tweet-composer></app-tweet-composer>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 600px;
      margin: 20px auto;
      padding: 0 16px;
    }
  `]
})
export class App {
}

bootstrapApplication(App);