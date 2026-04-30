import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

import { Repo } from '../../../Repositorios/models/repositorios';
import { User } from '../../../Users/models/usuarios-model';
import { UsersService } from '../../../Users/services/usuarios.service';

@Component({
  standalone: true,
  selector: 'app-repos-detail',
  imports: [NgIf, NgFor],
  templateUrl: './repos-detail.component.html',
  styleUrl: './repos-detail.component.css',
})
export class ReposDetailComponent {
  @Input() repo: Repo | null = null;
  @Output() closed = new EventEmitter<void>();

  user?: User;
  loadingUser = false;

  constructor(private usersService: UsersService) {}

  onClose(): void {
    this.closed.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['repo'] && this.repo) {
      this.user = undefined;
      this.loadUser();
    }
  }

  loadUser(): void {
    if (!this.repo || !this.repo.ownerId) return;

    this.loadingUser = true;

    this.usersService.getUserById(this.repo.ownerId).subscribe({
      next: (user) => {
        this.user = user;
        this.loadingUser = false;
      },
      error: () => (this.loadingUser = false),
    });
  }
}