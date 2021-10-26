import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesListComponent } from './factures-list.component';

describe('FacturesListComponent', () => {
  let component: FacturesListComponent;
  let fixture: ComponentFixture<FacturesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
