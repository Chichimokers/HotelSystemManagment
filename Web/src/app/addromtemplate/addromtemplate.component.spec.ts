import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddromtemplateComponent } from './addromtemplate.component';

describe('AddromtemplateComponent', () => {
  let component: AddromtemplateComponent;
  let fixture: ComponentFixture<AddromtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddromtemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddromtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
