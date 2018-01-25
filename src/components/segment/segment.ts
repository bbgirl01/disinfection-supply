import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'segment',
  templateUrl: 'segment.html'
})
export class SegmentComponent {

  @Input() segments = [];
  @Input() segmentIndex = 0;
  @Output() segmentChange = new EventEmitter<any>();
  constructor() {
  }

  segmentChangeFn(index) {
    this.segmentIndex = index;
    this.segmentChange.emit(index);
  }
}
