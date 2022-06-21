import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Nauderick',
        lastName: 'Noob',
        age: 574
      },
      {
      firstName: 'Maria',
      lastName: 'Silva',
      age: 54
      },
      {
      firstName: 'João',
      lastName: 'Pedro',
      age: 14
      },
      {
      firstName: 'Marcio',
      lastName: 'Santos',
      age: 44
      }
    ]

    return of(peopleArray)
  }
}
