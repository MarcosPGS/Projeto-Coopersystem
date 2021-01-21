import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateDetalheComponent } from './resgate-detalhe.component';

describe('ResgateDetalheComponent', () => {
  let component: ResgateDetalheComponent;
  let fixture: ComponentFixture<ResgateDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
