// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

// ngx-bootstrap and font-awesome
import { ModalModule } from 'ngx-bootstrap/modal';

// my components
import { ListComponent } from './list/list.component';
import { TextLinkComponent } from './text-link/text-link.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditLinkComponent } from './edit-link/edit-link.component';

// my directives
import { FontSizeDirective } from './directives/font-size.directive';
import { MarginDirective } from './directives/margin-bottom.directive';
import { CursorPointerDirective } from './directives/cursor-pointer.directive';
import { ColorDirective } from './directives/color.directive';
import { FavIconComponent } from './fav-icon/fav-icon.component';
import { CleanUrlPipe } from './clean-url.pipe';
import { NotesComponent } from './notes/notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FontSizeDirective,
    TextLinkComponent,
    MarginDirective,
    EditCategoryComponent,
    EditLinkComponent,
    CursorPointerDirective,
    ColorDirective,
    FavIconComponent,
    CleanUrlPipe,
    NotesComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  entryComponents: [
    EditCategoryComponent,
    EditLinkComponent,
    EditNoteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
