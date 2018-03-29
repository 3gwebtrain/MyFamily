import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmarFamilyComponent } from './umar-family.component';

describe('UmarFamilyComponent', () => {
  let component: UmarFamilyComponent;
  let fixture: ComponentFixture<UmarFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmarFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmarFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
