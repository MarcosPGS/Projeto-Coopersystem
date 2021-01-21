import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateConsultaComponent } from './resgate-consulta.component';

describe('ResgateConsultaComponent', () => {
  let component: ResgateConsultaComponent;
  let fixture: ComponentFixture<ResgateConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResgateConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgateConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
