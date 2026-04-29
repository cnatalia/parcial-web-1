import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { User } from '../../models/usuarios-model';
import { Repo } from '../../../Repositorios/models/repositorios';
import { RepositoriosService } from '../../../Repositorios/services/repositorios.service';

@Component({
  standalone: true,
  selector: 'app-usuario-detalle',
  imports: [NgIf, NgFor],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css',
})
export class UsuarioDetalleComponent {
  @Input() user: User | null = null;
  @Output() closed = new EventEmitter<void>();
  repos: Repo[] = [];
  loadingRepos = false;

  constructor(private reposService: RepositoriosService) {}

  onClose(): void {
    this.closed.emit();
  }

    ngOnChanges(changes: SimpleChanges): void { 
    if (changes['user'] && this.user) {
      this.loadRepos();
    }
  }

  loadRepos(): void {
    if (!this.user || this.user.repoIds.length === 0) return;
    this.loadingRepos = true;
    this.reposService.getReposByIds(this.user.repoIds).subscribe({
      next: (repos) => {
        this.repos = repos;
        this.loadingRepos = false;
      },
      error: () => (this.loadingRepos = false),
    });
  }
}
