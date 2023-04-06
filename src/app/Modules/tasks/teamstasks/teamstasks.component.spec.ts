import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamstasksComponent } from './teamstasks.component';

describe('TeamstasksComponent', () => {
  let component: TeamstasksComponent;
  let fixture: ComponentFixture<TeamstasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamstasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamstasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
