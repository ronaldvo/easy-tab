import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NoteDataService } from './note-data.service';
import { Note } from './note.model';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation({ duration: 300})
  ]
})
export class NotesComponent implements OnInit {
  notes: Note[];
  modalRef: BsModalRef;
  editingRow: number;
  notesFormGroup: FormGroup;

  constructor(private noteDataService: NoteDataService, private modalService: BsModalService, private formBuilder: FormBuilder) {
    this.editingRow = null;

    this.notesFormGroup = this.formBuilder.group({
      notesFormArray: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.notes = [];
    this.noteDataService.get().subscribe(data => {
      this.notes = data;
    });
  }

  delete(idx) {
    this.noteDataService.delete(idx);
  }

  openModal(idx?) {
    const initialState = {
      index: idx,
      title: idx >= 0 ? 'Edit' : 'Add'
    };
    this.modalRef = this.modalService.show(EditNoteComponent, {initialState});
  }

  save(index, e) {
    this.notes[index].checked = e.checked;
    this.noteDataService.update(this.notes[index], index);
  }

}
