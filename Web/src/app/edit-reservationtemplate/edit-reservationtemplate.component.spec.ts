import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReservationtemplateComponent } from './edit-reservationtemplate.component';

describe('EditReservationtemplateComponent', () => {
  let component: EditReservationtemplateComponent;
  let fixture: ComponentFixture<EditReservationtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditReservationtemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReservationtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
