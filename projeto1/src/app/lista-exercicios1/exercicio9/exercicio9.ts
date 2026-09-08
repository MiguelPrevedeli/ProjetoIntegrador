import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.css',
})
export class Exercicio9 {
  produto = 'Mouse Gamer';
  estoque = 5;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}