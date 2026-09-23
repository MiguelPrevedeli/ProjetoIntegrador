import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exercicio8',
  standalone: false,
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.css',
})
export class Exercicio8 {
   produtos = [
    { id: 1, nome: 'Teclado', preco: 80, quantidade: 5 },
    { id: 2, nome: 'Mouse', preco: 50, quantidade: 10 },
    { id: 3, nome: 'Monitor', preco: 900, quantidade: 3 },
    { id: 4, nome: 'Fone de ouvido', preco: 120, quantidade: 8 },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 4 }
  ];
}