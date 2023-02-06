import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEntradasComponent } from './tabela-entradas.component';

describe('TabelaEntradasComponent', () => {
  let component: TabelaEntradasComponent;
  let fixture: ComponentFixture<TabelaEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaEntradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
