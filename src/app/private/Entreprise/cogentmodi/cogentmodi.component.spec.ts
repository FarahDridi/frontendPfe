import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogentmodiComponent } from './cogentmodi.component';

describe('CogentmodiComponent', () => {
  let component: CogentmodiComponent;
  let fixture: ComponentFixture<CogentmodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogentmodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogentmodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
