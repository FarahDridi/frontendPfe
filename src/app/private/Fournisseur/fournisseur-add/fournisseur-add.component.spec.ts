import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurAddComponent } from './fournisseur-add.component';

describe('FournisseurAddComponent', () => {
  let component: FournisseurAddComponent;
  let fixture: ComponentFixture<FournisseurAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
