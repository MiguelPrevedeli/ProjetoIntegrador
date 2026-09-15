import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeasfioFinal } from './deasfio-final';

describe('DeasfioFinal', () => {
  let component: DeasfioFinal;
  let fixture: ComponentFixture<DeasfioFinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeasfioFinal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeasfioFinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
