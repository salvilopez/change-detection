import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFactorialComponent } from './user-factorial.component';

describe('UserFactorialComponent', () => {
  let component: UserFactorialComponent;
  let fixture: ComponentFixture<UserFactorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFactorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFactorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
