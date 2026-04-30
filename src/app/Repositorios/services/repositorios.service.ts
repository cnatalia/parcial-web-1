import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repo } from '../models/repositorios';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoriosService {
  private apiUrl = 'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json';

  constructor(private http: HttpClient) {}

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.apiUrl);
  }

  getReposByIds(ids: number[]): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.apiUrl).pipe(
      map((repos: Repo[]) => repos.filter((repo: Repo) => ids.includes(repo.id)))
    );
  }
}
