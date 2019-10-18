// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// ngx-bootstrap and font-awesome
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

// my components
import { ListComponent } from './list/list.component';
import { FavIconComponent } from './fav-icon/fav-icon.component';
import { TextLinkComponent } from './text-link/text-link.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditLinkComponent } from './edit-link/edit-link.component';
import { RedditComponent } from './reddit/reddit.component';
import { NotesComponent } from './notes/notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

// my directives, pipe
import { FontSizeDirective } from './directives/font-size.directive';
import { MarginDirective } from './directives/margin-bottom.directive';
import { CursorPointerDirective } from './directives/cursor-pointer.directive';
import { ColorDirective } from './directives/color.directive';
import { CleanUrlPipe } from './clean-url.pipe';



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
    EditNoteComponent,
    RedditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
