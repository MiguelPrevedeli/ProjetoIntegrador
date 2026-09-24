import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio14',
  standalone: false,
  templateUrl: './exercicio14.html',
  styleUrl: './exercicio14.css',
})
export class Exercicio14 {

 
  // exercicio 1
  mensagemVisivel: boolean = false;

  alterarMensagem(): void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }


  
 
  //exercicio 2

  usuarioLogado: boolean = false;

  alterarLogin(): void {
    this.usuarioLogado = !this.usuarioLogado;
  }



  // exercicio 3
  idade: number = 18;

  aumentarIdade(): void {
    this.idade++;
  }

  diminuirIdade(): void {
    if (this.idade > 0) {
      this.idade--;
    }
  }


  // Lista para demonstrar @for
  produtos: string[] = [
    'Notebook',
    'Mouse',
    'Teclado',
    'Monitor'
  ];

}
