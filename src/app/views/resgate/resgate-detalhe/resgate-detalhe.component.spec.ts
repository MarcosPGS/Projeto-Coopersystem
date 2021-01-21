import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateDetalheComponent } from './resgate-detalhe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { HomeComponent } from '../../home/home.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatDialogModule} from '@angular/material/dialog';

describe('ResgateDetalheComponent', () => {
  let component: ResgateDetalheComponent;
  let fixture: ComponentFixture<ResgateDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
  ReactiveFormsModule,
              FormsModule,
              HttpClientTestingModule,
              MatDialogModule,
              RouterTestingModule.withRoutes([ { path: '', component: HomeComponent}]),
            ],
      declarations: [ ResgateDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgateDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar a funcao voltar', () => {
    expect(component.voltar()).toBe();
  });

  it('Deve testar a funcao confirmar', () => {
    expect(component.confirmar()).toBe();
  });
});
