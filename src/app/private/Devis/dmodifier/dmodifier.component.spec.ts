import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmodifierComponent } from './dmodifier.component';

describe('DmodifierComponent', () => {
  let component: DmodifierComponent;
  let fixture: ComponentFixture<DmodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmodifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
