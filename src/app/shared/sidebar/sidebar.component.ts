import { Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: './assets/img/sidebar/dashboard (1).png', class: '' },
  { path: '/entrada', title: 'Entrada', icon: './assets/img/sidebar/entrada.png', class: '' },
  { path: '/terreiro', title: 'Terreiro', icon: './assets/img/sidebar/terreiro.png', class: '' },
  { path: '/lavador', title: 'Lavador', icon: './assets/img/sidebar/lavagem.png', class: '' },
  { path: '/pre-secagem', title: 'Pré-Secagem', icon: './assets/img/sidebar/maquina.png', class: '' },
  { path: '/secagem', title: 'Secador', icon: './assets/img/sidebar/maquina.png', class: '' },
  { path: '/moega-descanso', title: 'Moega Descanso', icon: './assets/img/sidebar/maquina.png', class: '' },
  { path: '/tulha', title: 'Tulha', icon: './assets/img/sidebar/tulha.png', class: '' },
  { path: '/beneficio', title: 'Benefício', icon: './assets/img/sidebar/beneficios.png', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private location: Location) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);

    console.log(titlee)

    let item = this.menuItems.map((item) => {
      console.log(item.path+" | "+titlee);
      if(item.path == titlee){
        item.class = 'active';
      }else{
        item.class = '';
      }
    });

    console.log(item);

  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
