import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../rest.service';
import { User } from '../user.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public title:string;
  public myForm: FormGroup;
  public user:User;
  constructor(public fb: FormBuilder,public userService: RestService) {
    this.title = "Buscar usuario";

    this.myForm = this.fb.group({
      ide: ['', [Validators.required]]
    });

   }

  ngOnInit() {
  }

  register(){
    console.log(this.myForm.value.ide);
    this.obtenerUser(this.myForm.value.ide);
  }

  obtenerUser(ide:string) {
    this.userService.getUser(ide).subscribe((data: any) => {
      this.user = data.data;
      console.log(this.user);
    }, error => {
      console.log('Error al conectar con el servidor');
    });
  }

}
