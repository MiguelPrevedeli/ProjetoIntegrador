import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.css',
})
export class DesafioFinal {
  
  nome = '';
  disciplinas = 1;
  mensagem = '';

  aumentar() {
    this.disciplinas++;
  }

  diminuir() {
    if (this.disciplinas > 1) {
      this.disciplinas--;
    }
  }

  matricular() {
    this.mensagem = 'Matrícula realizada para ' + this.nome + ' com ' + this.disciplinas + ' disciplinas!';
  }
}
