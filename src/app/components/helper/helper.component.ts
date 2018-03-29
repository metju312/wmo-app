import {MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'helper.component',
  templateUrl: 'helper.component.html',
  styleUrls: ['./helper.component.css'],
})

export class HelperComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {
    this.parentComponent = this.data.parentComponent;
  }

  parentComponent: string;
  header: string;
  title: string;
  content: string;


  closeDialog() {
    this.dialog.closeAll();

  }

}
