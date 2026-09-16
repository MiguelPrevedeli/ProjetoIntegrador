import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  standalone: false,
  templateUrl: './exercicio3.html',
  styleUrl: './exercicio3.css',
})
export class Exercicio3 {
    idade: number = 18;

  aumentarIdade(): void {
    this.idade++;
  }

  diminuirIdade(): void {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
