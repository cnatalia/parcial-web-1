import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

describe('UsuarioDetalleComponent', () => {
  let component: UsuarioDetalleComponent;
  let fixture: ComponentFixture<UsuarioDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioDetalleComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with user = null', () => {
    expect(component.user).toBeNull();
  });

  it('should start with empty repos array', () => {
    expect(component.repos).toEqual([]);
  });

  it('should emit closed event when onClose is called', () => {
    spyOn(component.closed, 'emit');
    component.onClose();
    expect(component.closed.emit).toHaveBeenCalled();
  });
});
