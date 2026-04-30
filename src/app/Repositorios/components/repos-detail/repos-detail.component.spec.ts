import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReposDetailComponent } from './repos-detail.component';

describe('ReposDetailComponent', () => {
  let component: ReposDetailComponent;
  let fixture: ComponentFixture<ReposDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReposDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with loadingRepo = true', () => {
    expect(component.loadingRepo).toBeTrue();
  });

  it('should start with repo = null', () => {
    expect(component.repo).toBeNull();
  });

  it('should start with user = undefined', () => {
    expect(component.user).toBeUndefined();
  });
});
