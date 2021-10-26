import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogentComponent } from './cogent.component';

describe('CogentComponent', () => {
  let component: CogentComponent;
  let fixture: ComponentFixture<CogentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
