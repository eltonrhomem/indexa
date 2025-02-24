import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from "../../componentes/container/container.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

import agenda from '../../agenda.json';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
            ContainerComponent, 
            CabecalhoComponent, 
            SeparadorComponent,
            ContatoComponent,
            FormsModule,
            RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})



export class ListaContatosComponent {
    title = 'indexa';
    alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
    contatos: Array<Contato> = agenda;
    filtroPorTexto: string = '';
  
    filtrarContatosPorTexto(): Array<Contato> {
      if(!this.filtroPorTexto) {
          return this.contatos;
      }
      return this.contatos.filter(contato => {
          return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase());
      })
    }
  
    filtrarContatosPorLetraInicial(letra: string): Array<Contato> {
      return this.filtrarContatosPorTexto().filter(contato => contato.nome.toLowerCase().startsWith(letra))
      .sort((a, b) => a.nome.localeCompare(b.nome));
    }
}


interface Contato {
    id: number;
    nome: string;
    telefone: string;
}