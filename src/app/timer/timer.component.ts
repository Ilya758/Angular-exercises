import { Component } from '@angular/core';
import { TimerService } from './timer.service';
import { ITimer } from './timer.types';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  timer: ITimer;
  ts: TimerService;

  constructor(ts: TimerService) {
    this.ts = ts;
    this.timer = this.ts.createTimer();
  }

  handleUserAction() {
    return !this.timer.isStarted ? this.start() : this.stop();
  }

  start() {
    this.timer.isStarted = true;
    this.timer.interval = setInterval(() => {
      this.timer.count += 1;
      this.ts.commitData(this.timer.count);
    }, 1000);
  }

  stop() {
    this.timer.isStarted = false;
    this.clear();
  }

  reset() {
    this.clear();
    this.timer = {
      count: 0,
      isStarted: false,
      interval: null,
    };
    this.ts.commitData(0);
  }

  clear() {
    clearInterval(this.timer.interval!);
  }
}
