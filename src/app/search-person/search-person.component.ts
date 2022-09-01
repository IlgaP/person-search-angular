import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../shared/models/person.model";
import {PersonService} from "../shared/services/person.service";


@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.scss']
})
export class SearchPersonComponent implements OnInit {
  personalId: string = '';
  dateOfBirth: string = '';
  person$: Observable<Person> | undefined
  error$: Observable<string> | undefined
  columnTitles = [
    'Personal Id',
    'First name',
    'Last name',
    'Gender',
    'Date of birth'
  ]


  constructor(private personService: PersonService) { }

  ngOnInit(): void {

  }

  searchPerson(): void {
    this.person$ = this.personService.getPerson(this.personalId, this.dateOfBirth);
    this.error$ = this.personService.getError();

  }
}
