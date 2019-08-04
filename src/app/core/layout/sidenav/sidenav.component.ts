import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // Receive menu data from the parent 'MainLayoutComponent'
  //@Input() menu: Array<Object>;
  
  constructor() { }

  ngOnInit() {
  }

}
