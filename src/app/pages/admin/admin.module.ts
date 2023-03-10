import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { SharedModule } from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    SharedModule,
    MatIconModule,
  ]
})
export class AdminModule { }
