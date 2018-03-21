import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  ngOnInit(): void {
  }

  displayedColumns = ['name'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Projekt 1'},
  {name: 'Projekt 2'},
  {name: 'Projekt 3'},
  {name: 'Projekt 4'},
  {name: 'Projekt 5'},
  {name: 'Projekt 6'},
  {name: 'Projekt 7'},
  {name: 'Projekt 8'},
  {name: 'Projekt 9'},
  {name: 'Projekt 10'},
  {name: 'Projekt 11'},
  {name: 'Projekt 12'},
  {name: 'Projekt 13'}
];
