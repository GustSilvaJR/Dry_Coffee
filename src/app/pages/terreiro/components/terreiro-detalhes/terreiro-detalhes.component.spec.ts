import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerreiroDetalhesComponent } from './terreiro-detalhes.component';

describe('TerreiroDetalhesComponent', () => {
  let component: TerreiroDetalhesComponent;
  let fixture: ComponentFixture<TerreiroDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerreiroDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerreiroDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
