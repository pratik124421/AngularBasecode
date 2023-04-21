import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  sliderOpen : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  togleslider(data:boolean){
    console.log("received.")
    this.sliderOpen = data
  }
  
}
