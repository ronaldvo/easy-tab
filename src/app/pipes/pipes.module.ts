import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './shorten.pipe';
import { CleanUrlPipe } from './clean-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShortenPipe,
    CleanUrlPipe
  ],
  exports: [
    ShortenPipe,
    CleanUrlPipe
  ]
})
export class PipesModule { }
