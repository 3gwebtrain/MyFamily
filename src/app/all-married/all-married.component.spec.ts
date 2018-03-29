import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMarriedComponent } from './all-married.component';

describe('AllMarriedComponent', () => {
  let component: AllMarriedComponent;
  let fixture: ComponentFixture<AllMarriedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMarriedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMarriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
