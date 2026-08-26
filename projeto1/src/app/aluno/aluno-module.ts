import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { Listagem } from './listagem/listagem';
import { Cadastro } from './cadastro/cadastro';

@NgModule({
  declarations: [Listagem, Cadastro],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
