import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.css',
})
export class Exercicio11  {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionar() {
    this.mensagem = 'Você adicionou ' + this.quantidade + ' ' + this.produto + ' ao carrinho!';
  }
}
