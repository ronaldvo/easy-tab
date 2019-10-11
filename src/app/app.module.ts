// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// angular material



// my components
import { ListComponent } from './list/list.component';
import { TextLinkComponent } from './text-link/text-link.component';
import { ListManageComponent } from './list-manage/list-manage.component';

// my directives
import { FontSizeDirective } from './font-size.directive';
import { MarginDirective } from './margin-bottom.directive';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FontSizeDirective,
    TextLinkComponent,
    ListManageComponent,
    MarginDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ListManageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
