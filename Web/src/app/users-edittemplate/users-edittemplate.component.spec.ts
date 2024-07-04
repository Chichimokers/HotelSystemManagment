import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEdittemplateComponent } from './users-edittemplate.component';

describe('UsersEdittemplateComponent', () => {
  let component: UsersEdittemplateComponent;
  let fixture: ComponentFixture<UsersEdittemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersEdittemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersEdittemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
