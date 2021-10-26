import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisAddComponent } from './devis-add.component';

describe('DevisAddComponent', () => {
  let component: DevisAddComponent;
  let fixture: ComponentFixture<DevisAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
