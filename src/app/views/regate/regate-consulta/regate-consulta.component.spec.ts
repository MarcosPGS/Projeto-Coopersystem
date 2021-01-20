import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegateConsultaComponent } from './regate-consulta.component';

describe('RegateConsultaComponent', () => {
  let component: RegateConsultaComponent;
  let fixture: ComponentFixture<RegateConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegateConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegateConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
