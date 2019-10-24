import { Injectable } from '@angular/core';
import { ChromeStorageService } from './chrome-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  // private toastBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // public toastObservable = this.toastBehaviorSubject.asObservable();
  // private chromeWatcher = this.chromeStorageService.linksObservable.subscribe(result => {
  //   this.toast('Updated!');
  // });

  constructor(private toastBar: MatSnackBar) { }

  show(message?: string): void {
    this.toastBar.open(message, null, {
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'left'
    })
  }
}
