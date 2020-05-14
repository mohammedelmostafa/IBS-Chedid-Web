import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminTableComponent } from './system-admin-table.component';

describe('SystemAdminTableComponent', () => {
  let component: SystemAdminTableComponent;
  let fixture: ComponentFixture<SystemAdminTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdminTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
