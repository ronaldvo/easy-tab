import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './font-size.directive';
import { MarginDirective } from './margin-bottom.directive';
import { CursorPointerDirective } from './cursor-pointer.directive';
import { ColorDirective } from './color.directive';
import { TopTooltipDirective } from './top-tooltip.directive';
import { RightTooltipDirective } from './right-tooltip.directive';
import { BottomTooltipDirective } from './bottom-tooltip.directive';

@NgModule({
  declarations: [
    FontSizeDirective,
    MarginDirective,
    CursorPointerDirective,
    ColorDirective,
    TopTooltipDirective,
    RightTooltipDirective,
    BottomTooltipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FontSizeDirective,
    MarginDirective,
    CursorPointerDirective,
    ColorDirective,
    TopTooltipDirective,
    RightTooltipDirective,
    BottomTooltipDirective
  ]
})
export class DirectivesModule { }
