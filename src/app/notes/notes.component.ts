import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NoteDataService } from '../note-data.service';
import { Note } from '../note.model';
import { EditNoteComponent } from '../edit-note/edit-note.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  modalRef: BsModalRef;
  editingRow: number;

  constructor(private noteDataService: NoteDataService, private modalService: BsModalService) { 
    this.editingRow = null;
    this.notes = [];
  }

  ngOnInit() {
    this.noteDataService.get().subscribe(data => {
      this.notes = data;
    })
  }

  delete(idx) {
    this.noteDataService.delete(idx);
  }

  openModal(idx?) {
    const initialState = {
      index: idx,
      title: idx >= 0 ? 'Edit' : 'Add'
    }
    this.modalRef = this.modalService.show(EditNoteComponent, {initialState});
  }

 

}
