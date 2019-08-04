import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  
  constructor() { }

  ngOnInit() {
  }

  // Receive menu object and title from the parent 'MainLayoutComponent'
  @Input() menu: Array<Object>;
  @Input() title: string;
  // Raise the event to the parent 'MainLayoutComponent'
  @Output() toggleSidebar = new EventEmitter();
  
  sidebarOpened = false;

  /**
   * Toggle the sidenav menu.
   */
  toggleSidenav() {
      this.sidebarOpened = !this.sidebarOpened;
      this.toggleSidebar.emit(this.sidebarOpened);
  }

}
