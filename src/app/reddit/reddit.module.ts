import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RedditComponent } from './reddit.component';
import { SharedModule } from '../shared-components/shared.module';

@NgModule({
  declarations: [
    RedditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RedditComponent
  ]
})
export class RedditModule { }
