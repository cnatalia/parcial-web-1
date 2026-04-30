import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UsersListComponent,
    UsuarioDetalleComponent
  ]
})
export class UsersModule {}
