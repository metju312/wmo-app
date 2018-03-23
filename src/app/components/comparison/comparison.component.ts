import { Component, OnInit } from '@angular/core';
import { ProjectDataStorage } from '../../services/projectDataStorage';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
    projects: Array<any>;
    constatns: any;
  public compareList: Array<any>;

  constructor(private projectStorage: ProjectDataStorage) {
        this.projects = this.projectStorage.getUserData();
        this.constatns = this.projectStorage.getConstants();
        this.compareList = this.projectStorage.getChosenList();
    }

  ngOnInit() {
  }

}
