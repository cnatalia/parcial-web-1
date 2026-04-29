import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../models/usuarios-model';
import { UsersService } from './usuarios.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/users.json';

  const mockUsers: User[] = [
    {
      id: 1,
      username: 'user1',
      name: 'User One',
      email: 'user1@mail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      role: 'admin',
      location: 'Bogotá',
      repoIds: [101, 102]
    },
    {
      id: 2,
      username: 'user2',
      name: 'User Two',
      email: 'user2@mail.com',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      role: 'developer',
      location: 'Medellín',
      repoIds: [103]
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService]
    });

    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users from the API', () => {
    service.getUsers().subscribe((users) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should return an array of users', () => {
    service.getUsers().subscribe((users) => {
      expect(Array.isArray(users)).toBeTrue();
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush(mockUsers);
  });

  it('should return users with correct model attributes', () => {
    service.getUsers().subscribe((users) => {
      const user = users[0];
      expect(user.id).toBeDefined();
      expect(user.username).toBeDefined();
      expect(user.name).toBeDefined();
      expect(user.email).toBeDefined();
      expect(user.avatarUrl).toBeDefined();
      expect(user.role).toBeDefined();
      expect(user.location).toBeDefined();
      expect(Array.isArray(user.repoIds)).toBeTrue();
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush(mockUsers);
  });

  it('should handle HTTP 500 error', () => {
    service.getUsers().subscribe({
      next: () => fail('expected an error'),
      error: (error) => {
        expect(error.status).toBe(500);
      }
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});
