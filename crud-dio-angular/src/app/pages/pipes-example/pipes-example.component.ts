import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0
  text = 'Hello, world!'
  date =  new Date
  pessoa = {
    nome: 'Nauderick',
    idade: 547,
    profissao: 'Mago'
  }
  nomes = ['Nuaderick']

  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  mudaValor() {
    this.text = 'novo texto'
  }

  add(text: string) {
    this.nomes.push(text)
  }
}
