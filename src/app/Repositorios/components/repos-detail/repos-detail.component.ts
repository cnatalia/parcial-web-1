import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoriosService } from '../../services/repositorios.service';
import { UsersService } from '../../../Users/services/usuarios.service';
import { Repo } from '../../models/repositorios';
import { User } from '../../../Users/models/usuarios-model';

@Component({
  standalone: false,
  selector: 'app-repos-detail',
  templateUrl: './repos-detail.component.html',
  styleUrls: ['./repos-detail.component.css'],
})
export class ReposDetailComponent implements OnInit {
  repo: Repo | null = null;
  user: User | undefined = undefined;
  loadingRepo = true;
  loadingUser = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reposService: RepositoriosService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.reposService.getRepos().subscribe({
      next: (repos) => {
        this.repo = repos.find((r) => r.id === id) || null;
        this.loadingRepo = false;
        if (this.repo?.ownerId) {
          this.loadUser(this.repo.ownerId);
        }
      },
      error: () => (this.loadingRepo = false),
    });
  }

  loadUser(ownerId: number): void {
    this.loadingUser = true;
    this.usersService.getUserById(ownerId).subscribe({
      next: (user) => {
        this.user = user;
        this.loadingUser = false;
      },
      error: () => (this.loadingUser = false),
    });
  }

  onBack(): void {
    this.router.navigate(['/repositorios']);
  }
}
