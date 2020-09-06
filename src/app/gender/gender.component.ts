import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { PetService } from '../services/pet.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  catsAlphabeticallyByOwnersGender$: Observable<any>;
  layout$: Observable<{columns: number, rowHeight: string}>;
  smallScreen = {
    columns: 1,
    rowHeight: '4:4',
  };
  normalScreen = {
    columns: 2,
    rowHeight: '4:4',
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private petService: PetService,
  ) { }

  ngOnInit(): void {
    this.layout$ = this.layoutToggle();

    this.catsAlphabeticallyByOwnersGender$ = this.petService.getCatsAlphabeticallyByOwnersGender();
  }

  private layoutToggle(): Observable<{columns: number, rowHeight: string}> {
    return this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(
      map((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small]) {
          console.log( 'Matches smallScreen');
          return this.smallScreen;
        } else if (state.breakpoints[Breakpoints.Medium] || state.breakpoints[Breakpoints.Large] || state.breakpoints[Breakpoints.XLarge]) {
          console.log( 'Matches normalScreen');
          return this.normalScreen;
        }
      })
    );
  }

}
