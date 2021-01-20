import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegateDetalhesComponent } from './regate-detalhes.component';

describe('RegateDetalhesComponent', () => {
  let component: RegateDetalhesComponent;
  let fixture: ComponentFixture<RegateDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegateDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegateDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
