import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/project";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public projectsList: Array<Project> = [];
  public project: Project = new Project();


  ngOnInit(): void {

    // var projects = [{
    //   id: 1,
    //   name: "Project 1",
    //   description: "Opis projektu 1",
    //   products: [{
    //     name: "Nazwa produktu 1",
    //     description: "Opis produktu 1"
    //   }],
    //   tasks: [{
    //     name: "Nazwa zadania 1",
    //     description: "Opis zadanina 1"
    //   }],
    //   roles: [{
    //     name: "Nazwa roli 1",
    //     description: "Opis roli 1"
    //   }]
    // }];
    //this.projectsList.push(projects);
  }
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  displayedColumns = ['name'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Project 1'},
  {name: 'Project 2'},
  {name: 'Project 3'},
  {name: 'Project 4'},
  {name: 'Project 5'},
  {name: 'Project 6'},
  {name: 'Project 7'},
  {name: 'Project 8'},
  {name: 'Project 9'},
  {name: 'Project 10'},
  {name: 'Project 11'},
  {name: 'Project 12'},
  {name: 'Project 13'}
];
