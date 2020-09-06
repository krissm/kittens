import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Person, Pet, PetsByOwnerGender } from '../index.d';
import { Gender, Pets } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private http: HttpClient,
  ) { }

  getCatsAlphabeticallyByOwnersGender(): Observable<any> {
    return this.http.get<any>(`http://agl-developer-test.azurewebsites.net/people.json`)
      .pipe(
        map((people: Person[]): PetsByOwnerGender[] => {
          return [
            {
              gender: Gender.MALE,
              cats: this.getCats(people, Gender.MALE),
            },
            {
              gender: Gender.FEMALE,
              cats: this.getCats(people, Gender.FEMALE),
            },
          ];
        }),
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError('Something failed. Please try again later');
        }),
      );
  }

  private getCats(people: Person[], gender: string): Pet[] {
    const peopleByGender = people.filter(person => person.gender === gender);
    return this.getPets(peopleByGender, Pets.CAT);
  }

  private getPets(people: Person[], petType: string): Pet[] {
    const pets = [];
    people.forEach(person => {
      person.pets && person.pets.forEach(pet => {
        if (pet.type === petType) {
          pets.push(pet);
        }
      });
    });
    return pets.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }

}
