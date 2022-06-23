import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Nauderick Noob'
  buttonText = 'Clique aqui'
  textRed = 'textred'
  bgColor = 'green'
  fontSize = '20px'
  textInput = ''
  number = 0
  destroy = false

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text
  }

  clicou(value: any) {
    console.log('Clicou aqui!...', value)
  }

  clicouNoFilho(text: any) {
    console.log(text)
  }

  incrementa() {
    this.number++
  }

  destroyComponent() {
    this.destroy = true
  }
}
