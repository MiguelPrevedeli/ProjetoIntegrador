import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: false,
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  @Input() nomeLoja =  null; 
}
