import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RedditComponent } from './reddit.component';
import { SharedComponentsModule } from '../_shared-components/shared-components.module';
import { DirectivesModule } from '../_directives/directives.module';
import { PipesModule } from '../_pipes/pipes.module';

@NgModule({
  declarations: [
    RedditComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ],
  exports: [
    RedditComponent
  ]
})
export class RedditModule { }
