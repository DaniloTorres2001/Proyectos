import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpesComponent } from './ipes.component';

describe('IpesComponent', () => {
  let component: IpesComponent;
  let fixture: ComponentFixture<IpesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
