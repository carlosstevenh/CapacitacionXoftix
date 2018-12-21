import { Component, OnInit } from '@angular/core';
import { User} from '../user.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public user:User;
  public title:string;
  public myForm: FormGroup;
  public tipIde:string[];
  public genero:string[];

  constructor(public fb: FormBuilder,public userService: RestService) {
    this.title = "Formulario de registro";
    this.myForm = this.fb.group({
      tipIde: ['', [Validators.required]],
      ide: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      ape: ['', [Validators.required]],
      fec: ['', [Validators.required]],
      gen: ['', [Validators.required]]
    });
    this.tipIde = ["CC","TI","RC"];
    this.genero = ["M","F"];

   }

  ngOnInit() {
  }

  register(){
    this.user = {
      id:0,
      tipoIdentificacion: this.myForm.value.tipIde,
      identificacion:this.myForm.value.ide,
      nombre:this.myForm.value.nom,
      apellido:this.myForm.value.ape,
      fechaNacimiento:this.myForm.value.fec,
      genero:this.myForm.value.gen
    } 
    this.addUser(this.user);
  }
  addUser(user:User) {
    this.userService.save(user).subscribe(data => {
      console.log(data);
    })
  }

}
