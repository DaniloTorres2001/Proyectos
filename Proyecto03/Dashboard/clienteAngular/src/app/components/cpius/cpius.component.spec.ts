import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpiusComponent } from './cpius.component';

describe('CpiusComponent', () => {
  let component: CpiusComponent;
  let fixture: ComponentFixture<CpiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpiusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
