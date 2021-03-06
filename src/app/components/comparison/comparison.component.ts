import {Component, OnInit} from '@angular/core';
import {ProjectDataStorage} from '../../services/projectDataStorage';
import {HelperComponent} from "../helper/helper.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
  projects: Array<any>;
  chosenProjects = new Set();

  constatns: any;
  public compareList: Array<any>;

  constructor(private projectStorage: ProjectDataStorage,
              public dialog: MatDialog) {
    this.projects = this.projectStorage.getUserData();
    this.constatns = this.projectStorage.getConstants();
    this.compareList = this.projectStorage.getChosenList();
    let i = 0;
    for (let project of this.projects) {
      if (this.compareList[i] == true) {
        this.chosenProjects.add(project);
      }
      i++;
    }
  };

  ngOnInit() {
  }
  openHelper() {
    this.dialog.open(HelperComponent, {
      data: {parentComponent: 'profile'}
    });
  }
}
