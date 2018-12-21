import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { User } from '../user.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public title:string;
  public users:User;

  constructor(public userService: RestService) { 
    this.title = "Usuarios registrados";
  }

  ngOnInit() {
    this.obtenerPrueba();
  }

  obtenerPrueba() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.data;
      console.log(this.users);
    }, error => {
      console.log('Error al conectar con el servidor');
    });
  }

}
