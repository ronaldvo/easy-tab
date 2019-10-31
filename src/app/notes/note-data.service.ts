import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note.model';
import { ToastService } from '../toast.service';
import { ChromeStorageService } from '../links/links-chrome-storage.service';
import { ChromeTabService } from '../chrome-tabs/chrome-tab.service';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {

  notes: Note[];

  constructor(private toast: ToastService) { }

  get(): Observable<Note[]> {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];

    return Observable.create(obs => {
      obs.next(this.notes);
    });
  }

  private set(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  add(note: Note) {
    this.notes.unshift(note);

    this.set(this.notes);
    this.toast.show('Note added!');
  }

  update(note: Note, idx: number) {
    this.notes[idx] = note;

    this.set(this.notes);
    this.toast.show('Note updated!');
  }

  delete(idx: number) {
    this.notes.splice(idx, 1);
    this.set(this.notes);
    this.toast.show('Note deleted!');
  }
}
