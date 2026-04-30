import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoriosService } from '../../services/repositorios.service';
import { Repo } from '../../models/repositorios';

@Component({
  standalone: false,
  selector: 'app-listar-repos',
  templateUrl: './repos-list.component.html',
  styleUrl: './repos-list.component.css',
})
export class ReposListComponent implements OnInit {
  repos: Repo[] = [];
  loading = true;
  reposLimit = signal(8);
  reposVisible: Repo[] = [];

  constructor(private reposService: RepositoriosService, private router: Router) {}

  ngOnInit(): void {
    this.reposService.getRepos().subscribe({
      next: (repos) => {
        this.repos = repos;
        this.reposVisible = this.repos.slice(0, this.reposLimit());
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  onLoadMoreClick() {
    this.reposLimit.update((v) => v + 8);
    this.reposVisible = this.repos.slice(0, this.reposLimit());
  }

  onSelectRepo(repo: Repo): void {
    this.router.navigate(['/repositorios', repo.id]);
  }
}
