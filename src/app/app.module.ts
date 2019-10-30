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

// angular material
import { MatSnackBarModule } from '@angular/material/snack-bar';

// my directives, pipes
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

// my modules or components
import { LinksModule } from './links/links.module';
import { NotesModule } from './notes/notes.module';
import { RedditModule } from './reddit/reddit.module';
import { ChromeTabsModule } from './chrome-tabs/chrome-tabs.module';
import { SharedModule } from './shared-components/shared.module';



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
    ModalModule.forRoot(),
    DragulaModule.forRoot(),

    // my stuff
    DirectivesModule,
    PipesModule,
    LinksModule,
    NotesModule,
    RedditModule,
    ChromeTabsModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
