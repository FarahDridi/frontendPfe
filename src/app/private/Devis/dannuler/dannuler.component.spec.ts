import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DannulerComponent } from './dannuler.component';

describe('DannulerComponent', () => {
  let component: DannulerComponent;
  let fixture: ComponentFixture<DannulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DannulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DannulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
