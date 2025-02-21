import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./componentes/container/container.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';


interface Contato {
    id: number;
    nome: string;
    telefone: string;
}

import agenda from './agenda.json';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            CommonModule, 
            RouterOutlet, 
            ContainerComponent, 
            CabecalhoComponent, 
            CabecalhoComponent, 
            SeparadorComponent,
            ContatoComponent,
            FormsModule,
            FormularioContatoComponent,
            SeparadorComponent            
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
