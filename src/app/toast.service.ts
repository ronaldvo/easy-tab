import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastBar: MatSnackBar) { }

  show(message?: string): void {
    this.toastBar.open(message, null, {
      duration: 2500,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    })
  }
}
