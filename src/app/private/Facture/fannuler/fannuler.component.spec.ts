import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FannulerComponent } from './fannuler.component';

describe('FannulerComponent', () => {
  let component: FannulerComponent;
  let fixture: ComponentFixture<FannulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FannulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FannulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
