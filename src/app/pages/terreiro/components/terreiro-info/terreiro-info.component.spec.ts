import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerreiroInfoComponent } from './terreiro-info.component';

describe('TerreiroInfoComponent', () => {
  let component: TerreiroInfoComponent;
  let fixture: ComponentFixture<TerreiroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerreiroInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerreiroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
