import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnMarriedComponent } from './all-un-married.component';

describe('AllUnMarriedComponent', () => {
  let component: AllUnMarriedComponent;
  let fixture: ComponentFixture<AllUnMarriedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUnMarriedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUnMarriedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
