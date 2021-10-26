import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreactiverComponent } from './dreactiver.component';

describe('DreactiverComponent', () => {
  let component: DreactiverComponent;
  let fixture: ComponentFixture<DreactiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreactiverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreactiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
