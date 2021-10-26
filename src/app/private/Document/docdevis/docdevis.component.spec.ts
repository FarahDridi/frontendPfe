import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdevisComponent } from './docdevis.component';

describe('DocdevisComponent', () => {
  let component: DocdevisComponent;
  let fixture: ComponentFixture<DocdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocdevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
