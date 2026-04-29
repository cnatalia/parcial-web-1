import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RepositoriosService } from './repositorios.service';
import { Repo } from '../models/repositorios';

describe('RepositoriosService', () => {
  let service: RepositoriosService;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json';

  const mockRepos: Repo[] = [
    {
      id: 101,
      name: 'repo-101',
      description: 'Angular project',
      language: 'TypeScript',
      stars: 50,
      createdAt: '2025-01-01',
      ownerId: 1
    },
    {
      id: 102,
      name: 'repo-102',
      description: 'React project',
      language: 'JavaScript',
      stars: 30,
      createdAt: '2025-02-01',
      ownerId: 1
    },
    {
      id: 103,
      name: 'repo-103',
      description: 'Python project',
      language: 'Python',
      stars: 10,
      createdAt: '2025-03-01',
      ownerId: 2
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepositoriosService]
    });

    service = TestBed.inject(RepositoriosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all repos', () => {
    service.getRepos().subscribe((repos) => {
      expect(repos).toBeTruthy();
      expect(repos.length).toBe(3);
      expect(repos).toEqual(mockRepos);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockRepos);
  });

  it('should return empty array when API returns no data', () => {
    service.getRepos().subscribe((repos) => {
      expect(repos.length).toBe(0);
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush([]);
  });

  it('should return repos with correct model attributes', () => {
    service.getRepos().subscribe((repos) => {
      const repo = repos[0];
      expect(repo.id).toBeDefined();
      expect(repo.name).toBeDefined();
      expect(repo.description).toBeDefined();
      expect(repo.language).toBeDefined();
      expect(repo.stars).toBeDefined();
      expect(repo.createdAt).toBeDefined();
      expect(repo.ownerId).toBeDefined();
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush(mockRepos);
  });

  it('should filter repos by ids', () => {
    service.getReposByIds([101, 102]).subscribe((repos) => {
      expect(repos.length).toBe(2);
      expect(repos.map(r => r.id)).toEqual([101, 102]);
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush(mockRepos);
  });

  it('should return one repo when filtering by single id', () => {
    service.getReposByIds([103]).subscribe((repos) => {
      expect(repos.length).toBe(1);
      expect(repos[0].id).toBe(103);
      expect(repos[0].ownerId).toBe(2);
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush(mockRepos);
  });

  it('should handle HTTP 500 error', () => {
    service.getRepos().subscribe({
      next: () => fail('expected an error'),
      error: (error) => {
        expect(error.status).toBe(500);
      }
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});