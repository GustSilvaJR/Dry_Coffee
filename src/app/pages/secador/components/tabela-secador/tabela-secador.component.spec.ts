import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaSecadorComponent } from './tabela-secador.component';

describe('TabelaSecadorComponent', () => {
  let component: TabelaSecadorComponent;
  let fixture: ComponentFixture<TabelaSecadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaSecadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaSecadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
