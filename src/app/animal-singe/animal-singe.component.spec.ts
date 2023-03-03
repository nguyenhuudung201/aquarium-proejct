import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSingeComponent } from './animal-singe.component';

describe('AnimalSingeComponent', () => {
  let component: AnimalSingeComponent;
  let fixture: ComponentFixture<AnimalSingeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSingeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalSingeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
