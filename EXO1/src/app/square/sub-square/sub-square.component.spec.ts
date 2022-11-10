import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSquareComponent } from './sub-square.component';

describe('SubSquareComponent', () => {
  let component: SubSquareComponent;
  let fixture: ComponentFixture<SubSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSquareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
