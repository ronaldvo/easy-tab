// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// other modules / libs
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { DragulaModule } from 'ng2-dragula';

// angular material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

// my components
import { LinksComponent } from './links/links.component';
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
import { SideOptionsComponent } from './side-options/side-options.component';
import { SearchComponent } from './search/search.component';
import { ChromeTabsComponent } from './chrome-tabs/chrome-tabs.component';
import { ShortenPipe } from './shorten.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
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
    RedditComponent,
    SideOptionsComponent,
    SearchComponent,
    ChromeTabsComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCheckboxModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    DragulaModule.forRoot()
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
