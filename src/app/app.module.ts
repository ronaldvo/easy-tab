// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';



// my components
import { ListComponent } from './list/list.component';
import { TextLinkComponent } from './text-link/text-link.component';

// my directives
import { FontSizeDirective } from './font-size.directive';
import { MarginDirective } from './margin-bottom.directive';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditLinkComponent } from './edit-link/edit-link.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FontSizeDirective,
    TextLinkComponent,
    MarginDirective,
    EditCategoryComponent,
    EditLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    EditCategoryComponent,
    EditLinkComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
