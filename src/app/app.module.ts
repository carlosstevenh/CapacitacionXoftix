import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    BuscarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule     
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
