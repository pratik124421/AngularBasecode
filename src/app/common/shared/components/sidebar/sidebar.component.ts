import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input("slider") sliderOpen : boolean
  constructor() { }

  ngOnInit(): void {
  }

}
