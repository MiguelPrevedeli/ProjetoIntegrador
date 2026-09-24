import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: 'baixa' | 'media' | 'alta';
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio13',
  standalone: false,
  templateUrl: './exercicio13.html',
  styleUrl: './exercicio13.css',
})
export class Exercicio13 {
  tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Estudar Angular',
      responsavel: 'João',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 2,
      titulo: 'Criar componentes',
      responsavel: 'Maria',
      prioridade: 'media',
      concluida: true
    },
    {
      id: 3,
      titulo: 'Fazer exercícios',
      responsavel: 'Pedro',
      prioridade: 'alta',
      concluida: false
    },
    {
      id: 4,
      titulo: 'Revisar código',
      responsavel: 'Ana',
      prioridade: 'baixa',
      concluida: true
    },
    {
      id: 5,
      titulo: 'Testar aplicação',
      responsavel: 'Carlos',
      prioridade: 'media',
      concluida: false
    },
    {
      id: 6,
      titulo: 'Publicar projeto',
      responsavel: 'Juliana',
      prioridade: 'alta',
      concluida: true
    }
  ];

  alterarSituacao(tarefa: Tarefa): void {
    tarefa.concluida = !tarefa.concluida;
  }

  quantidadeConcluidas(): number {
    return this.tarefas.filter(
      tarefa => tarefa.concluida
    ).length;
  }

  quantidadePendentes(): number {
    return this.tarefas.filter(
      tarefa => !tarefa.concluida
    ).length;
  }
}
