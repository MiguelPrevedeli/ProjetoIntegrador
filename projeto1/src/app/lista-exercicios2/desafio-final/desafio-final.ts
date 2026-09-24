import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: 'planejamento' | 'desenvolvimento' | 'testes' | 'concluído';
  entregue: boolean;
}


@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.css',
})
export class DesafioFinal {
   mostrarConcluidos: boolean = true;

  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Sistema de Biblioteca',
      equipe: 'Equipe Alpha',
      nota: 8.5,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo de Saúde',
      equipe: 'Equipe Beta',
      nota: 7.5,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Sistema de Vendas',
      equipe: 'Equipe Gamma',
      nota: 5.5,
      status: 'testes',
      entregue: false
    },
    {
      id: 4,
      titulo: 'Plataforma de Cursos',
      equipe: 'Equipe Delta',
      nota: null,
      status: 'planejamento',
      entregue: false
    },
    {
      id: 5,
      titulo: 'Aplicativo de Eventos',
      equipe: 'Equipe Epsilon',
      nota: 9,
      status: 'concluído',
      entregue: true
    }
  ];



  alterarStatus(projeto: Projeto): void {

    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';

    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';

    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';

    } else {
      projeto.status = 'planejamento';
    }

  }



  alternarConcluidos(): void {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }



  quantidadeTotal(): number {
    return this.projetos.length;
  }


 
  quantidadeConcluidos(): number {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }

}
