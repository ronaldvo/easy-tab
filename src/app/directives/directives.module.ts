import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './font-size.directive';
import { MarginDirective } from './margin-bottom.directive';
import { CursorPointerDirective } from './cursor-pointer.directive';
import { ColorDirective } from './color.directive';


@NgModule({
  declarations: [
    FontSizeDirective,
    MarginDirective,
    CursorPointerDirective,
    ColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FontSizeDirective,
    MarginDirective,
    CursorPointerDirective,
    ColorDirective
  ]
})
export class DirectivesModule { }
