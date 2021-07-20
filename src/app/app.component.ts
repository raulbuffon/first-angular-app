import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  tweet = {
    body: "Here's a body of a tweet",
    isLiked: true,
    likesCount: 10
  }
}
