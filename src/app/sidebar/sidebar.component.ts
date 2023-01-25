import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: './assets/img/sidebar/dashboard (1).png', class: '' },
    { path: '/dashboard', title: 'Entrada',  icon: './assets/img/sidebar/entrada.png', class: '' },
    { path: '/dashboard', title: 'Terreirao',  icon: './assets/img/sidebar/terreiro.png', class: '' },
    { path: '/dashboard', title: 'Lavador',  icon: './assets/img/sidebar/lavagem.png', class: '' },
    { path: '/dashboard', title: 'Pré-Secagem',  icon: './assets/img/sidebar/maquina.png', class: '' },
    { path: '/dashboard', title: 'Secador',  icon: './assets/img/sidebar/maquina.png', class: '' },
    { path: '/dashboard', title: 'Moega Descanso',  icon: './assets/img/sidebar/maquina.png', class: '' },
    { path: '/dashboard', title: 'Tulha',  icon: './assets/img/sidebar/tulha.png', class: '' },
    { path: '/dashboard', title: 'Benefício',  icon: './assets/img/sidebar/beneficios.png', class: '' }
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
