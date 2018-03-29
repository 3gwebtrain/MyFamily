import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArifFamilyComponent } from './arif-family.component';

describe('ArifFamilyComponent', () => {
  let component: ArifFamilyComponent;
  let fixture: ComponentFixture<ArifFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArifFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArifFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
