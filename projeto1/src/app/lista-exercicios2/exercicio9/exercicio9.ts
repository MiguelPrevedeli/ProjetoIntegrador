import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.css',
})
export class Exercicio9 {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Notebook',
      preco: 3500,
      quantidade: 0
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 3
    },
    {
      id: 3,
      nome: 'Teclado',
      preco: 150,
      quantidade: 6
    },
    {
      id: 4,
      nome: 'Monitor',
      preco: 1200,
      quantidade: 2
    },
    {
      id: 5,
      nome: 'Headset',
      preco: 250,
      quantidade: 10
    }
  ];

  classificarEstoque(quantidade: number): string {

    if (quantidade === 0) {
      return 'Sem estoque';
    }

    if (quantidade >= 1 && quantidade <= 5) {
      return 'Estoque baixo';
    }

    return 'Estoque disponível';
  }
  
}
