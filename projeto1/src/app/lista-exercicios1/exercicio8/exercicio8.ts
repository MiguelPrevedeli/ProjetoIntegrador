import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio8',
  standalone: false,
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.css',
})
export class Exercicio8 {
  produto = 'Mouse Gamer';
  preco = 150;
  quantidade = 2;

  get total(): number {
    return this.preco * this.quantidade;
  }
}