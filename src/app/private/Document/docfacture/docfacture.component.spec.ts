import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocfactureComponent } from './docfacture.component';

describe('DocfactureComponent', () => {
  let component: DocfactureComponent;
  let fixture: ComponentFixture<DocfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocfactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
