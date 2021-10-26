import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisListComponent } from './devis-list.component';

describe('DevisListComponent', () => {
  let component: DevisListComponent;
  let fixture: ComponentFixture<DevisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
