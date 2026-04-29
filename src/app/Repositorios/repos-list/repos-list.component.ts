import { Component, OnInit, signal } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { RepositoriosService } from '../services/repositorios.service';
import { Repo } from '../models/repositorios';


@Component({
  standalone: true,
  selector: 'app-listar-repos',
  imports: [NgForOf, NgIf],
  templateUrl: './repos-list.component.html',
  styleUrl: './repos-list.component.css'
})
export class ReposListComponent implements OnInit {
  repos: Repo[] = [];
  loading = true;
  reposLimit = signal(8)
  reposVisible: Repo[] = []

  constructor(private reposService: RepositoriosService) {}

  ngOnInit(): void {
    this.reposService.getRepos().subscribe({
      next: (repos) => {
        this.repos = repos;
        this.reposVisible = this.repos.slice(0, this.reposLimit())
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onLoadMoreClick() {
    this.reposLimit.update((v) => v + 8);
    this.reposVisible = this.repos.slice(0, this.reposLimit());
  }
}