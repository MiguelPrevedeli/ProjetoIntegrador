import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  standalone: false,
  templateUrl: './exercicio2.html',
  styleUrl: './exercicio2.css',
})
export class Exercicio2 {
  produto = 'Teclado';
  preco = 150
  quantidade = 3;

  total = this.preco * this.quantidade;
}
