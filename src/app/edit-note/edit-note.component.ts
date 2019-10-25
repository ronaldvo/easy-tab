import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NoteDataService } from '../note-data.service'; 
import { FormControl } from '@angular/forms';
import { Note } from '../note.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  title: string;
  index: number;
  note = new FormControl('');

  constructor(private noteDataService: NoteDataService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    // editing if there is an index passed in
    if (this.index >= 0) {
      console.log(this.index)
      console.log(this.noteDataService)
      this.note.setValue(this.noteDataService.notes[this.index].note);
    }
  }

  save(){
    let newNote: Note = {
      note: this.note.value,
      checked: false,
      date: new Date()
    }


    if (this.index >= 0) {
      this.noteDataService.update(newNote, this.index);
    } else {
      this.noteDataService.add(newNote);
    }
    this.bsModalRef.hide();
  }

  delete() {
    this.noteDataService.delete(this.index);
    this.bsModalRef.hide();
  }
}
