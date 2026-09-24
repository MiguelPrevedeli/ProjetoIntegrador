import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.css',
})
export class Exercicio10 {
   produtos: Produto[] = [
    {
      id: 1,
      nome: 'Notebook',
      preco: 3500,
      quantidade: 4,
      promocao: true
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 10,
      promocao: false
    },
    {
      id: 3,
      nome: 'Teclado',
      preco: 150,
      quantidade: 6,
      promocao: true
    },
    {
      id: 4,
      nome: 'Monitor',
      preco: 1200,
      quantidade: 3,
      promocao: false
    },
    {
      id: 5,
      nome: 'Headset',
      preco: 250,
      quantidade: 8,
      promocao: true
    }
  ];

  alterarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }
}
