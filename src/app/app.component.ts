import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  receivedWidth;
  receivedHeight;

  receiveWidth(width) {
    this.receivedWidth = width.passedWidth;
  }
  receiveHeight(height) {
    this.receivedHeight = height.passedHeight;
  }

  ngOnInit() {
    this.receivedWidth = 300;
    this.receivedHeight = 200;
  }
}
