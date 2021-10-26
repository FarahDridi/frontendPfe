import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogdocComponent } from './cogdoc.component';

describe('CogdocComponent', () => {
  let component: CogdocComponent;
  let fixture: ComponentFixture<CogdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogdocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
