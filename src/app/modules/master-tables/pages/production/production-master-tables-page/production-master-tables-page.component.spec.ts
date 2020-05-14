import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionMasterTablesPageComponent } from './production-master-tables-page.component';

describe('ProductionMasterTablesPageComponent', () => {
  let component: ProductionMasterTablesPageComponent;
  let fixture: ComponentFixture<ProductionMasterTablesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionMasterTablesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionMasterTablesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
