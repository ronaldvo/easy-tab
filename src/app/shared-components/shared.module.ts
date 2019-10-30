import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextLinkComponent } from './text-link/text-link.component';
import { SearchComponent} from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TextLinkComponent,
    SearchComponent
  ],
  exports: [
    TextLinkComponent,
    SearchComponent
  ]
})
export class SharedModule { }
