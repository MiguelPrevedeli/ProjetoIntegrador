import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}



@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.css',
})
export class Exercicio12 {
  
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Notebook',
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Teclado',
      quantidade: 7
    }
  ];

  nomeProduto: string = '';
  quantidadeProduto: number | null = null;

  mensagem: string = '';

  cadastrar(): void {

    this.mensagem = '';


    if (this.nomeProduto.trim() === '') {
      this.mensagem = 'Digite o nome do produto.';
      return;
    }

    if (
      this.quantidadeProduto === null ||
      this.quantidadeProduto < 0
    ) {
      this.mensagem = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    // Criando o novo produto
    const novoProduto: Produto = {
      id: this.produtos.length > 0
        ? Math.max(...this.produtos.map(produto => produto.id)) + 1
        : 1,

      nome: this.nomeProduto,
      quantidade: this.quantidadeProduto
    };

   
    this.produtos.push(novoProduto);

   
    this.nomeProduto = '';
    this.quantidadeProduto = null;

    this.mensagem = 'Produto cadastrado com sucesso!';
  }

  excluir(id: number): void {

    this.produtos = this.produtos.filter(
      produto => produto.id !== id
    );

  }
}
