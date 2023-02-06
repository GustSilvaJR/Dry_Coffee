import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTerreiroComponent } from './tabela-terreiro.component';

describe('TabelaTerreiroComponent', () => {
  let component: TabelaTerreiroComponent;
  let fixture: ComponentFixture<TabelaTerreiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaTerreiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaTerreiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
