import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {

  notes: Note[];

  constructor() { }
  
  get(): Observable<Note[]> {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [];

    return Observable.create(obs => {
      obs.next(this.notes);
    })
  }

  set(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  add(note: Note) {
    this.notes.push(note)

    this.set(this.notes);
  }

  update(note: Note, idx: number) {
    this.notes[idx] = note;

    this.set(this.notes);
  }

  delete(idx: number) {
    this.notes.splice(idx, 1);
    this.set(this.notes);
  }
}
