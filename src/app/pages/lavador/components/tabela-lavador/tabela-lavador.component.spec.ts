import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaLavadorComponent } from './tabela-lavador.component';

describe('TabelaLavadorComponent', () => {
  let component: TabelaLavadorComponent;
  let fixture: ComponentFixture<TabelaLavadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaLavadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaLavadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
