import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeTvaComponent } from './taxe-tva.component';

describe('TaxeTvaComponent', () => {
  let component: TaxeTvaComponent;
  let fixture: ComponentFixture<TaxeTvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeTvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxeTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
