import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingDashboardComponent } from './pending-dashboard.component';

describe('PendingDashboardComponent', () => {
  let component: PendingDashboardComponent;
  let fixture: ComponentFixture<PendingDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingDashboardComponent]
    });
    fixture = TestBed.createComponent(PendingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
