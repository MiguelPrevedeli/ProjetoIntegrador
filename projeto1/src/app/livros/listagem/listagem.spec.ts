import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listagem } from './listagem';

describe('Listagem', () => {
  let component: Listagem;
  let fixture: ComponentFixture<Listagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Listagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
