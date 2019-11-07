// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// other modules / libs
import { ModalModule } from 'ngx-bootstrap/modal';
import { DragulaModule } from 'ng2-dragula';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import * as _ from 'lodash';

// angular material / bootstrap
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// my directives, pipes
import { DirectivesModule } from './_directives/directives.module';
import { PipesModule } from './_pipes/pipes.module';

// my modules or components
import { LinksModule } from './links/links.module';
import { NotesModule } from './notes/notes.module';
import { RedditModule } from './reddit/reddit.module';
import { ChromeTabsModule } from './chrome-tabs/chrome-tabs.module';
import { SharedComponentsModule } from './_shared-components/shared-components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // from libs or Angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    DragulaModule.forRoot(),

    // my stuff
    DirectivesModule,
    PipesModule,
    LinksModule,
    NotesModule,
    RedditModule,
    ChromeTabsModule,
    SharedComponentsModule,
    TypeaheadModule.forRoot()
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
