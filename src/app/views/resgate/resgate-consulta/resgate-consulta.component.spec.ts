import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateConsultaComponent } from './resgate-consulta.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { ResgateDetalheComponent } from '../resgate-detalhe/resgate-detalhe.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Investimentos } from '../../../core/template/modal/investimentos';


describe('ResgateConsultaComponent', () => {
  let component: ResgateConsultaComponent;
  let fixture: ComponentFixture<ResgateConsultaComponent>;

  let investimento: Investimentos = new Investimentos();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
  ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([ { path: 'resgate-detalhe', component: ResgateDetalheComponent}]),
      ],
      declarations: [ ResgateConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgateConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve testar o Componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar o metodo detalhar()', () => {
    expect(component.detalhar(investimento)).toBe();
  });

  it('Deve testar o metodo listarTodosInvestimentos()', () => {
    expect(component.listarTodosInvestimentos()).toBe();
  });
});
