import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/classes/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-exemplo02',
  templateUrl: './exemplo02.component.html',
  styleUrls: ['./exemplo02.component.css']
})

export class Exemplo02Component  implements OnInit{

  // se definir o modificador de acesso no parametro o atributo passa a ser visivel pela classe
  constructor(private pessoaService : PessoaService ) { }

  ngOnInit(): void {
    this.listar();
  }

  // produzir uma lista de pessoas
  pessoas: Pessoa[] = [];

  listar() : void {
    this.pessoas = this.pessoaService.listarPessoas();
  }

  nomePessoa!: string;
  mostrar(nome: string) : void {
    this.nomePessoa = nome;
  }
}
