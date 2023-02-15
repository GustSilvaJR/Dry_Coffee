import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPreSecagemComponent } from './tabela-pre-secagem.component';

describe('TabelaPreSecagemComponent', () => {
  let component: TabelaPreSecagemComponent;
  let fixture: ComponentFixture<TabelaPreSecagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPreSecagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPreSecagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
