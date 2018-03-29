import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FagruddinFamilyComponent } from './fagruddin-family.component';

describe('FagruddinFamilyComponent', () => {
  let component: FagruddinFamilyComponent;
  let fixture: ComponentFixture<FagruddinFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FagruddinFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FagruddinFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
