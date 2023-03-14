import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ListUsersService } from '../../services/listUsers/list-users.service';
import { UserDTO } from '../../interfaces/user-dto';
import { ModalCreateUserComponent } from './modal-create-user/modal-create-user.component';
import { DeleteUserService } from '../../services/deleteUser/delete-user.service';
import { ModalDeleteUserComponent } from './modal-delete-user/modal-delete-user.component';
import { ModalUpdateUserComponent } from './modal-update-user/modal-update-user.component';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['num', 'nome', 'email', 'tipoUser', 'acoes'];

  public users: UserDTO[];

  public dataSource: any;

  constructor(private listUsersService: ListUsersService, private deleteUserService: DeleteUserService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.listUsers();
  }

  public listUsers() {
    const handle_empresa = JSON.parse(localStorage.getItem('current_user')).handle_empresa;

    this.listUsersService.listUsers(handle_empresa).subscribe({
      next: (res) => {

        let i = 1;

        res.forEach((element) => {
          element.pos = i;
          i++;
        })

        this.users = res;

        this.dataSource = new MatTableDataSource<UserDTO>(this.users);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log("Error: " + err);
      }
    })
  }

  updateUser(email: string){
    const modalUpdate = this.dialog.open(ModalUpdateUserComponent)
  }

  deleteUser(email: string, name:string) {

    const modalDelete = this.dialog.open(ModalDeleteUserComponent, {
      data: name
    })

    modalDelete.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.deleteUserService.execute(email).subscribe({
          next: (res) => {
            this.listUsers();
          },
          error: (res) => {
            console.log("Resposta: " + res);
            alert('Não foi possível deletar o usuário, entre em contato com o administrador do sistema');
          }
        })
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalCreateUserComponent);
0
    dialogRef.afterClosed().subscribe(result => {
      this.listUsers();
    });
  }

}



