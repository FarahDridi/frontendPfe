import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesAddComponent } from './factures-add.component';

describe('FacturesAddComponent', () => {
  let component: FacturesAddComponent;
  let fixture: ComponentFixture<FacturesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
