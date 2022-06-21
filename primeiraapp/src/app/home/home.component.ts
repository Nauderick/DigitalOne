import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/services/people.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count = 0
  nome = 'Ivonaldo Junior blablabla'
  text = ''
  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    },
  ]

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++
      if(this.count === 10) {
        clearInterval(interval)
      }
    }, 1000)
    this.getPeople()
  }

  clicou(nome: string): void {
    console.log('Clicou em mim, ai...', nome)
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people
    })
  }
}
