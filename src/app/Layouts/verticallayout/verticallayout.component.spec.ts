import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticallayoutComponent } from './verticallayout.component';

describe('VerticallayoutComponent', () => {
  let component: VerticallayoutComponent;
  let fixture: ComponentFixture<VerticallayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticallayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticallayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
