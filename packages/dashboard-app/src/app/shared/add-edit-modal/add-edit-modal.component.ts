import { Component, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dashboard-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss']
})
export class AddEditModalComponent implements OnInit {
  @Input() dataRowAssociate: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    console.log('Associado', this.dataRowAssociate);
  }
  
}
