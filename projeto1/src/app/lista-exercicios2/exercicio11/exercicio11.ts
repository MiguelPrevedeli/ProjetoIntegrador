import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',

  styleUrl: './exercicio11.css',
})
export class Exercicio11 {
   produtos: Produto[] = [
    {
      id: 1,
      nome: 'Notebook',
      preco: 3500,
      quantidade: 4
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 0
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
      quantidade: 0
    },
    {
      id: 5,
      nome: 'Headset',
      preco: 250,
      quantidade: 8
    }
  ];

  somenteDisponiveis: boolean = false;
}
