import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ListaExercicios1RoutingModule } from './lista-exercicios1-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';
import { Exercicio5 } from './exercicio5/exercicio5';
import { Exercicio6 } from './exercicio6/exercicio6';
import { Exercicio7 } from './exercicio7/exercicio7';
import { Exercicio8 } from './exercicio8/exercicio8';
import { Exercicio9 } from './exercicio9/exercicio9';
import { Exercicio10 } from './exercicio10/exercicio10';
import { Exercicio11 } from './exercicio11/exercicio11';
import { DesafioFinal } from './desafio-final/desafio-final';

@NgModule({
  declarations: [
    Exercicio1,
    Exercicio2,
    Exercicio3,
    Exercicio4,
    Exercicio5,
    Exercicio6,
    Exercicio7,
    Exercicio8,
    Exercicio9,
    Exercicio10,
    Exercicio11,
    DesafioFinal,
  ],
  imports: [CommonModule, ListaExercicios1RoutingModule,FormsModule],
})
export class ListaExercicios1Module {}
