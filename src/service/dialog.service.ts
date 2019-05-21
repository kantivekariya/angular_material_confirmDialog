import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/confirm-dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg) {
    return this.dialog.open(DialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      position: { top: '25px' },
      disableClose: true,
      data: {
        message: msg
      }
    });
  }
}
