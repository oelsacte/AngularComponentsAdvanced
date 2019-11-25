import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from "app/tab/tab.component";
import { Tab } from "../tab/tab.interface";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {
  
  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;
  
  // public tabs:Tab[] = [];

  private tabClickSubscription: any[] = [];
  
  constructor() { }
  
  ngOnInit() {
    if(this.tabClickSubscription) {
      this.tabClickSubscription.forEach(element => element.unsubscribe());
    }
  }
  
  ngAfterContentInit(): void {
    console.log(this.tabs);
    this.tabs.forEach(tab=>{
      let subscription = tab.onClick.subscribe(()=>{
        console.log(`tab ${tab.title} content clicked`);
      })
      this.tabClickSubscription.push(subscription);
    });
    this.selectTab(this.tabs.first);
    // if(this.tab) {
    //   console.log(this.tab);
    //   this.addTab(this.tab);
    //   this.tabClickSubscription = this.tab.onClick.subscribe(()=>{console.log('tab content click detected');});
    // }
  }

  selectTab(tab:Tab) {
    this.tabs.forEach(tab => tab.isActive = false);
    tab.isActive = true;
    // for (let tab of this.tabs){
    //   tab.isActive = false;
    // }
    // tab.isActive = true;
  }
  

}
