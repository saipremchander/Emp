import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkanniversaryComponent } from './workanniversary.component';

describe('WorkanniversaryComponent', () => {
  let component: WorkanniversaryComponent;
  let fixture: ComponentFixture<WorkanniversaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkanniversaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkanniversaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
