import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio4 } from './exercicio4';

describe('Exercicio4', () => {
  let component: Exercicio4;
  let fixture: ComponentFixture<Exercicio4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicio4],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicio4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
