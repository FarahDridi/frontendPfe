import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurUpdateComponent } from './fournisseur-update.component';

describe('FournisseurUpdateComponent', () => {
  let component: FournisseurUpdateComponent;
  let fixture: ComponentFixture<FournisseurUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
