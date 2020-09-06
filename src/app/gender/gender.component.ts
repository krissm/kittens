import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  catsAlphabeticallyByOwnersGender$: Observable<any>;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.catsAlphabeticallyByOwnersGender$ = this.petService.getCatsAlphabeticallyByOwnersGender();
  }

}
