import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'buscar', component: BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
