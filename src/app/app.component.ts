import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isAddTimerVisible = false;

  public isEndTimerAlertVisible = false;

  public time:number = 0;

  public timers: Array<number> = [];

  constructor() { 
    this.timers = [3, 20, 185];
  }

  logCountdownEnd(){
    console.log('The countdown is finished');
  }

  public showAddTimer() {
    this.isAddTimerVisible = true;
  }
  
  public hideAddTimer() {
    this.isAddTimerVisible = false;
  }

  public showEndTimerAlert() {
    this.isEndTimerAlertVisible = true;
  }

  public hideEndTimerAlert() {
    this.isEndTimerAlertVisible = false;
  }

  public submitAddTimer() {
    this.timers.push(this.time);
    this.hideAddTimer();
  }

}
