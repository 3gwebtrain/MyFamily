import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahulFamilyComponent } from './shahul-family.component';

describe('ShahulFamilyComponent', () => {
  let component: ShahulFamilyComponent;
  let fixture: ComponentFixture<ShahulFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShahulFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahulFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
