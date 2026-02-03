import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19 } from './covid19';

describe('Covid19', () => {
  let component: Covid19;
  let fixture: ComponentFixture<Covid19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Covid19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Covid19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
