import {Component, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {ProjectDataStorage} from "../../services/projectDataStorage";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  projects: Array<any>;
  constatns: any;
  chosenProject: number;



  constructor(private projectStorage: ProjectDataStorage,
              private route: ActivatedRoute) {
    this.projects = this.projectStorage.getUserData();
    this.constatns = this.projectStorage.getConstants();
    this.chosenProject = this.projectStorage.getDetail();

  }

  ngOnInit() {

  }
}
