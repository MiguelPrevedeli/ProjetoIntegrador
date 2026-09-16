import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  standalone: false,
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.css',
})
export class Exercicio4 {
  
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionarProduto(): void {
    this.quantidadeEstoque++;
  }

  removerProduto(): void {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
