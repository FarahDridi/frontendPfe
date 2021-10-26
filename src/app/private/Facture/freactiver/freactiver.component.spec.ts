import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreactiverComponent } from './freactiver.component';

describe('FreactiverComponent', () => {
  let component: FreactiverComponent;
  let fixture: ComponentFixture<FreactiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreactiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreactiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
