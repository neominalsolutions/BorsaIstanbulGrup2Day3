import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionAssignmentPageComponent } from './permission-assignment-page.component';

describe('PermissionAssignmentPageComponent', () => {
  let component: PermissionAssignmentPageComponent;
  let fixture: ComponentFixture<PermissionAssignmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionAssignmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissionAssignmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
