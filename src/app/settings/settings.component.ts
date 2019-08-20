import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Output() IncreaseWidthClicked = new EventEmitter<{passedWidth: number}>();
  @Output() DecreaseWidthClicked = new EventEmitter<{passedWidth: number}>();
  @Output() IncreaseHeightClicked = new EventEmitter<{passedHeight: number}>();
  @Output() DecreaseHeightClicked = new EventEmitter<{passedHeight: number}>();

  currentWidth = 300;
  currentHeight = 200;
  increaseIncrement = 5;

  constructor() { }

  ngOnInit() {
  }

  handleIncreaseWidthClick() {
    this.currentWidth = this.currentWidth + this.increaseIncrement;
    this.IncreaseWidthClicked.emit({passedWidth: this.currentWidth});
  }

  handleDecreaseWidthClick() {
    this.currentWidth = this.currentWidth - this.increaseIncrement;
    this.DecreaseWidthClicked.emit({passedWidth: this.currentWidth});
  }

  handleIncreaseHeightClick() {
    this.currentHeight = this.currentHeight + this.increaseIncrement;
    this.IncreaseHeightClicked.emit({passedHeight: this.currentHeight});
  }

  handleDecreaseHeightClick() {
    this.currentHeight = this.currentHeight - this.increaseIncrement;
    this.DecreaseHeightClicked.emit({passedHeight: this.currentHeight});
  }

}
