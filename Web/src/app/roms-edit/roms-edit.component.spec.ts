import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomsEditComponent } from './roms-edit.component';

describe('RomsEditComponent', () => {
  let component: RomsEditComponent;
  let fixture: ComponentFixture<RomsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
