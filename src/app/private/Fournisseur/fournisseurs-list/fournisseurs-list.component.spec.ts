import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseursListComponent } from './fournisseurs-list.component';

describe('FournisseursListComponent', () => {
  let component: FournisseursListComponent;
  let fixture: ComponentFixture<FournisseursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseursListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
