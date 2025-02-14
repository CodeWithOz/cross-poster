import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tweet-composer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.css']
})
export class TweetComposerComponent {
  tweetText = '';

  onInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
  }

  postTweet() {
    if (this.tweetText.trim()) {
      console.log('Posted tweet:', this.tweetText);
      this.tweetText = '';
    }
  }
}