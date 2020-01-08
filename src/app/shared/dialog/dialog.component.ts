import { Store } from '@ngrx/store';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as fromApp from '../../store/app.reducers';
import * as dialogActions from '../dialog/store/dialog.actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  errorMessage: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.store.select('dialog').subscribe(data => {
      if (!data.isOpen) {
        this.dialogRef.close();
      }
      this.errorMessage = data.error;
    });
  }
  onOkClick(): void {
    this.store.dispatch(
      new dialogActions.OpenDialog({ isOpen: false, message: '' })
    );
  }
}
