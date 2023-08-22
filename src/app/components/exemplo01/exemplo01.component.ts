import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  templateUrl: './exemplo01.component.html',
  styleUrls: ['./exemplo01.component.css']
})
export class Exemplo01Component implements OnInit {
  ngOnInit(): void {
    this.gerarNumero();
  }

  // exemplo 01 - Binding Unidirecional
  // Property Binding: propriedade gerada na classe e consumida no html (classe -> view)
  //rnd : number = Math.random();
  rnd! : number;  // rnd : number | undefined;
  
   // Event Binding: este método é executado através do evento click no html (view -> classe)
  gerarNumero() : void {
    this.rnd = Math.random();
  }

}
