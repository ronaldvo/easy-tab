import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextLinkComponent } from './text-link/text-link.component';
import { SearchComponent} from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../_directives/directives.module';
import { PipesModule } from '../_pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule
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
export class SharedComponentsModule { }
