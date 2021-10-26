import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesAddComponent } from './commandes-add.component';

describe('CommandesAddComponent', () => {
  let component: CommandesAddComponent;
  let fixture: ComponentFixture<CommandesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
