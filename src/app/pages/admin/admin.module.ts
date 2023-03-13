import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { SharedModule } from '../shared/shared.module';

//Components
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

//Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalCreateUserComponent } from './components/list-users/modal-create-user/modal-create-user.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserComponent,
    EditUserComponent,
    ModalCreateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    SharedModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
  ]
})
export class AdminModule { }