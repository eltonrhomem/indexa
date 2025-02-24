import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})

export class ContatoService {

    private contatos: Array<Contato> = [];

  constructor() { 
    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    this.contatos = contatosLocalStorage || [];

    //Salvar os contatos no localstorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    console.log(contato)
    console.log('this.contatos =', this.contatos)
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}


