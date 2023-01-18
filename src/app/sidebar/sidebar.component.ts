import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Entrada',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Terreirao',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Lavador',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Pré-Secagem',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Secador',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Moega Descanso',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Tulha',  icon: 'pe-7s-graph', class: '' },
    { path: '/dashboard', title: 'Benefício',  icon: 'pe-7s-graph', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
