import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReservationsComponent } from './edit-reservations.component';

describe('EditReservationsComponent', () => {
  let component: EditReservationsComponent;
  let fixture: ComponentFixture<EditReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditReservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
