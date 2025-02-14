import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ThreadPost {
  text: string;
  isEditing: boolean;
}

@Component({
  selector: 'app-tweet-composer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tweet-composer.component.html',
  styleUrls: ['./tweet-composer.component.css']
})
export class TweetComposerComponent {
  threadPosts: ThreadPost[] = [{ text: '', isEditing: true }];

  onInput(event: Event, index: number) {
    const textarea = event.target as HTMLTextAreaElement;
  }

  addThreadPost() {
    // Create a new array with the last post not editing and a new post
    this.threadPosts = [
      ...this.threadPosts.slice(0, this.threadPosts.length - 1),
      { ...this.threadPosts[this.threadPosts.length - 1], isEditing: false },
      { text: '', isEditing: true }
    ];
  }

  postThread() {
    if (this.threadPosts.some(post => post.text.trim())) {
      console.log('Posted thread:', this.threadPosts.map(post => post.text));
      this.threadPosts = [{ text: '', isEditing: true }];
    }
  }
}