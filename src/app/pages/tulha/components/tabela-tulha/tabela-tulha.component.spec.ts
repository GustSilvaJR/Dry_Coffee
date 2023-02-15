import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTulhaComponent } from './tabela-tulha.component';

describe('TabelaTulhaComponent', () => {
  let component: TabelaTulhaComponent;
  let fixture: ComponentFixture<TabelaTulhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaTulhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaTulhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
