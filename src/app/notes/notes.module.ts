import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [
    NotesComponent,
    EditNoteComponent
  ],
  entryComponents: [
    EditNoteComponent
  ],
  exports: [
    NotesComponent
  ]
})
export class NotesModule { }
