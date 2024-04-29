import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCetegoryComponent } from './sales-by-cetegory.component';

describe('SalesByCetegoryComponent', () => {
  let component: SalesByCetegoryComponent;
  let fixture: ComponentFixture<SalesByCetegoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesByCetegoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesByCetegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
