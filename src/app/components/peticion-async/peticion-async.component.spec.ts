import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionAsyncComponent } from './peticion-async.component';

describe('PeticionAsyncComponent', () => {
  let component: PeticionAsyncComponent;
  let fixture: ComponentFixture<PeticionAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
