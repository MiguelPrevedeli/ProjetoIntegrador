import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [Cadastro, Listagem],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
