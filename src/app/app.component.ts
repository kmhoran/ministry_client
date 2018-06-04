import { Component } from '@angular/core';
import { Menu } from './shared/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isNavCollapsed = true;

  constructor(menu: Menu) {
    console.log('menu', menu);
  }
  toggleNavCollapse(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  closeMenuCollapse(): void {
    this.isNavCollapsed = true;
  }
}
