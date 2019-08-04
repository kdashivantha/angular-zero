import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  constructor() { }

  // Receive menu object and title from the parent 'AppComponent'
  @Input() title: string;
  menu: Array<Object> = [];
  
  @ViewChild('sidenav', { static: true}) sidenav: MatSidenav;

  toggleSidenav() {
      // trigger the child component's 'toggle' method 
      this.sidenav.toggle();
  }

  ngOnInit() {
  }

}
