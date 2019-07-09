import { TimerService } from './timer.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [
    TimerService
  ],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() onComplete = new EventEmitter<void>();
  @Input() init = 20;

  constructor(public timer: TimerService) {}

  ngOnInit(): void {
    this.timer.restartCountdown(this.init);
  }

  ngOnDestroy(): void {
    this.timer.destroy();
  }
}
