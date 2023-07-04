import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationdeclarationComponent } from './calculationdeclaration.component';

describe('CalculationdeclarationComponent', () => {
  let component: CalculationdeclarationComponent;
  let fixture: ComponentFixture<CalculationdeclarationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculationdeclarationComponent]
    });
    fixture = TestBed.createComponent(CalculationdeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
