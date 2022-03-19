import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  createTimer() {
    return {
      count: this.pullData(),
      isStarted: false,
      interval: null,
    };
  }

  pullData(): number {
    return Number(localStorage.getItem('timer-count')) || 0;
  }

  commitData(data: number): void {
    localStorage.setItem('timer-count', String(data));
  }
}
