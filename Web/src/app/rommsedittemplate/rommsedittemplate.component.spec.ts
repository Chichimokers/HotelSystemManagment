import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RommsedittemplateComponent } from './rommsedittemplate.component';

describe('RommsedittemplateComponent', () => {
  let component: RommsedittemplateComponent;
  let fixture: ComponentFixture<RommsedittemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RommsedittemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RommsedittemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
