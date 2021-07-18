import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAndresComponentComponent } from './new-andres-component.component';

describe('NewAndresComponentComponent', () => {
  let component: NewAndresComponentComponent;
  let fixture: ComponentFixture<NewAndresComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAndresComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAndresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
