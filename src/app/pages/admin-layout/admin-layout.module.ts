import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NguiMapModule } from '@ngui/map';
import { LbdModule } from '../dashboard/lbd/lbd.module';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../dashboard/home/home.component';
import { EntradaModule } from '../entrada/entrada.module';
import { UserComponent } from '../user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    EntradaModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent
  ]
})

export class AdminLayoutModule {}
