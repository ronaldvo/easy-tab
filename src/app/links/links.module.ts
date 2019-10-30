import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { LinksComponent } from './links.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditLinkComponent } from './edit-link/edit-link.component';
import { FavIconComponent } from './fav-icon/fav-icon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../_directives/directives.module';
import { PipesModule } from '../_pipes/pipes.module';
import { SharedComponentsModule } from '../_shared-components/shared-components.module';

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
    SharedComponentsModule
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
