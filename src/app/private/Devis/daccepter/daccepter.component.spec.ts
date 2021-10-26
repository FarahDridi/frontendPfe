import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaccepterComponent } from './daccepter.component';

describe('DaccepterComponent', () => {
  let component: DaccepterComponent;
  let fixture: ComponentFixture<DaccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaccepterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
