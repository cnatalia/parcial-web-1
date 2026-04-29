import { Component, OnInit, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { UsersService } from '../../services/usuarios.service';
import { User } from '../../models/usuarios-model';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';

@Component({
  standalone: true,
  selector: 'app-listar-usuarios',
  imports: [NgForOf, NgIf, UsuarioDetalleComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  loading = true;
  usersVisible: User[] = [];
  userLimit = signal(8);
  selectedUser: User | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.usersVisible = this.users.slice(0, this.userLimit())
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }


  getRoleBadgeClass(role: string): string {
    return role === 'admin' ? 'badge-admin' : 'badge-dev';
  }

  onLoadMoreClick() {
    this.userLimit.update((v) => v + 8);
    this.usersVisible = this.users.slice(0, this.userLimit());
  }

  onSelectUser(user: User): void {
    this.selectedUser = user;
  }

   onCloseDetail(): void {
    this.selectedUser = null;
  }
}