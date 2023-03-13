import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

import { ListUsersService } from '../../services/list-users.service';
import { UserDTO } from '../../interfaces/user-dto';
import { ModalCreateUserComponent } from './modal-create-user/modal-create-user.component';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['num', 'nome', 'email', 'tipoUser', 'acoes'];
  
  public users:UserDTO[];
  
  public dataSource:any;

  constructor(private listUsers:ListUsersService, public dialog: MatDialog){}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() { 
  }

  ngOnInit(): void {
    const handle_empresa = JSON.parse(localStorage.getItem('current_user')).handle_empresa;

    this.listUsers.listUsers(handle_empresa).subscribe({
      next: (res)=>{

        let i = 1;

        res.forEach((element)=>{
          element.pos = i; 
          i++;
        })

        console.log(res);
        this.users = res;

        this.dataSource = new MatTableDataSource<UserDTO>(this.users);
        this.dataSource.paginator = this.paginator;
      },
      error: (err)=>{
        console.log("Error: "+ err);
      }
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalCreateUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


