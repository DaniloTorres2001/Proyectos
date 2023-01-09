import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnenploymentComponent } from './unenployment.component';

describe('UnenploymentComponent', () => {
  let component: UnenploymentComponent;
  let fixture: ComponentFixture<UnenploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnenploymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnenploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
