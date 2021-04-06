import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RettachComponent } from './rettach.component';

describe('RettachComponent', () => {
  let component: RettachComponent;
  let fixture: ComponentFixture<RettachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RettachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RettachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
