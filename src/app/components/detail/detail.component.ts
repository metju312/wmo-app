import {Component, OnInit} from '@angular/core';
import {ProjectDataStorage} from "../../services/projectDataStorage";
import {HelperComponent} from "../helper/helper.component";
import {MatDialog} from "@angular/material";


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
              public dialog: MatDialog) {
    this.projects = this.projectStorage.getUserData();
    this.constatns = this.projectStorage.getConstants();
    this.chosenProject = this.projectStorage.getDetail();

  }

  ngOnInit() {

  }

  openHelper() {
    this.dialog.open(HelperComponent, {
      data: {parentComponent: 'profile'}
    });
  }
}
