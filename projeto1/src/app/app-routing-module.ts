import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule),
  },

  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule),
  },

   {
    path: 'lista-exercicios1',
    loadChildren: () => import('./lista-exercicios1/lista-exercicios1-module').then(m => m.ListaExercicios1Module),
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
