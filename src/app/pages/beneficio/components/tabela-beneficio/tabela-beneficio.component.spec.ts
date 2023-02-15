import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaBeneficioComponent } from './tabela-beneficio.component';

describe('TabelaBeneficioComponent', () => {
  let component: TabelaBeneficioComponent;
  let fixture: ComponentFixture<TabelaBeneficioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaBeneficioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
