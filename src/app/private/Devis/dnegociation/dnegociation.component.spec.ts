import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnegociationComponent } from './dnegociation.component';

describe('DnegociationComponent', () => {
  let component: DnegociationComponent;
  let fixture: ComponentFixture<DnegociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnegociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnegociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
