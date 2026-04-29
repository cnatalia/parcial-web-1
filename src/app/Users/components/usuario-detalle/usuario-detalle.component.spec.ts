/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('UsuarioComponent', () => {
  let component: UsuarioDetalleComponent;
  let fixture: ComponentFixture<UsuarioDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ UsuarioDetalleComponent, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
