import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPagesComponent } from './roles-pages.component';

describe('RolesPagesComponent', () => {
  let component: RolesPagesComponent;
  let fixture: ComponentFixture<RolesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
