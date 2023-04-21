import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input("type") type : string
  @Input("func") func : () => any
  @Input("text") text : string
  @Input("style") buttonstyle : {} = {}
  constructor() {}

  ngOnInit(): void {

      Object.assign(this.buttonstyle,{"width":"100%"})

  }



}
