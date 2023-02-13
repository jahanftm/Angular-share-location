import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {

  @Input()
  appearance: 'BLUE' | 'GRAY' = 'BLUE'

  @Input()
  disable: boolean = false;

  @Input()
  styles = {};

  @Output()
  clicked = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.clicked.emit();
  }
}
