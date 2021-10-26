import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmodifierComponent } from './fmodifier.component';

describe('FmodifierComponent', () => {
  let component: FmodifierComponent;
  let fixture: ComponentFixture<FmodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmodifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
