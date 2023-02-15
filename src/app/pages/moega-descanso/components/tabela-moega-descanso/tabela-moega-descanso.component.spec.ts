import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMoegaDescansoComponent } from './tabela-moega-descanso.component';

describe('TabelaMoegaDescansoComponent', () => {
  let component: TabelaMoegaDescansoComponent;
  let fixture: ComponentFixture<TabelaMoegaDescansoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaMoegaDescansoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMoegaDescansoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
