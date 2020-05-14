import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionMasterTableFiltersComponent } from './production-master-table-filters.component';

describe('ProductionMasterTableFiltersComponent', () => {
  let component: ProductionMasterTableFiltersComponent;
  let fixture: ComponentFixture<ProductionMasterTableFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionMasterTableFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionMasterTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
