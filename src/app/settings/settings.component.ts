import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnChanges {

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

  ngOnChanges() {
    this.sendCurrentWidth();
  }

  handleIncreaseWidthClick() {
    this.currentWidth = this.currentWidth + this.increaseIncrement;
    this.sendCurrentWidth();
  }

  handleDecreaseWidthClick() {
    this.currentWidth = this.currentWidth - this.increaseIncrement;
    this.sendCurrentWidth();
  }

  handleWidthInputChange() {
    this.sendCurrentWidth();
  }

  handleIncreaseHeightClick() {
    this.currentHeight = this.currentHeight + this.increaseIncrement;
    this.sendCurrentHeight();
  }

  handleDecreaseHeightClick() {
    this.currentHeight = this.currentHeight - this.increaseIncrement;
    this.sendCurrentHeight();
  }

  handleHeightInputChange() {
    this.sendCurrentHeight();
  }

  sendCurrentWidth() {
    this.DecreaseWidthClicked.emit({passedWidth: this.currentWidth});
  }

  sendCurrentHeight() {
    this.IncreaseHeightClicked.emit({passedHeight: this.currentHeight});
  }
}
