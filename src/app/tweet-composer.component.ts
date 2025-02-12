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
  textareaRows = 1;

  onInput(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    this.textareaRows = Math.min(Math.max(1, Math.ceil(textarea.scrollHeight / 24)), 15);
  }

  postTweet() {
    if (this.tweetText.trim()) {
      console.log('Posted tweet:', this.tweetText);
      this.tweetText = '';
      this.textareaRows = 1;
    }
  }
}