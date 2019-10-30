import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { LinksComponent } from './links.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditLinkComponent } from './edit-link/edit-link.component';
import { FavIconComponent } from './fav-icon/fav-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared-components/shared.module';

@NgModule({
  declarations: [
    LinksComponent,
    EditCategoryComponent,
    EditLinkComponent,
    FavIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule,
    DirectivesModule,
    PipesModule,
    SharedModule
  ],
  exports: [
    LinksComponent
  ],
  entryComponents: [
    EditCategoryComponent,
    EditLinkComponent
  ]
})
export class LinksModule { }
