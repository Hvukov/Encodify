import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeniedComponent } from './user-denied.component';

describe('UserDeniedComponent', () => {
  let component: UserDeniedComponent;
  let fixture: ComponentFixture<UserDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeniedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
