import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReposListComponent } from './repos-list.component';

describe('ReposListComponent', () => {
  let component: ReposListComponent;
  let fixture: ComponentFixture<ReposListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReposListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with loading = true', () => {
    expect(component.loading).toBeTrue();
  });

  it('should start with empty repos array', () => {
    expect(component.repos).toEqual([]);
  });

  it('should start with reposLimit = 8', () => {
    expect(component.reposLimit()).toBe(8);
  });
});
