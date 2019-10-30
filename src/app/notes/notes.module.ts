import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DirectivesModule } from '../_directives/directives.module';
import { PipesModule } from '../_pipes/pipes.module';
import { SharedComponentsModule } from '../_shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    DirectivesModule,
    PipesModule,
    SharedComponentsModule
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
