import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpiesComponent } from './cpies.component';

describe('CpiesComponent', () => {
  let component: CpiesComponent;
  let fixture: ComponentFixture<CpiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
