import { Component, Input, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges {

  @Input() time: number = null;
  public minutes = '00';
  public seconds = '00';
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes) {
      const minutes = Math.trunc(changes.time.currentValue / 60 );
      const seconds = changes.time.currentValue - minutes * 60;
      this.minutes = ('0' + minutes).substr(-2);
      this.seconds = ('0' + seconds).substr(-2);
    }
  }

}
