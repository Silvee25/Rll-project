import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfooterComponent } from './ufooter.component';

describe('UfooterComponent', () => {
  let component: UfooterComponent;
  let fixture: ComponentFixture<UfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
