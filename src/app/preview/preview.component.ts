import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() passedWidth;
  @Input() passedHeight;

  constructor() { }

  ngOnInit() {
    console.log(this.passedWidth);
  }

}
