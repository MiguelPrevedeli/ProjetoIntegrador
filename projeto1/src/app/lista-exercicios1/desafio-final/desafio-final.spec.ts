import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioFinal } from './desafio-final';

describe('DesafioFinal', () => {
  let component: DesafioFinal;
  let fixture: ComponentFixture<DesafioFinal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesafioFinal],
    }).compileComponents();

    fixture = TestBed.createComponent(DesafioFinal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
