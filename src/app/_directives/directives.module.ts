import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './font-size.directive';
import { MarginDirective } from './margin-bottom.directive';
import { CursorPointerDirective } from './cursor-pointer.directive';
import { ColorDirective } from './color.directive';
import { TopTooltipDirective } from './top-tooltip.directive';
import { RightTooltipDirective } from './right-tooltip.directive';
import { BottomTooltipDirective } from './bottom-tooltip.directive';
import { ForceFocusDirective } from './force-focus.directive';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    FontSizeDirective,
    MarginDirective,
    CursorPointerDirective,
    ColorDirective,
    TopTooltipDirective,
    RightTooltipDirective,
    BottomTooltipDirective,
    ForceFocusDirective
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    FontSizeDirective,
    MarginDirective,
    CursorPointerDirective,
    ColorDirective,
    TopTooltipDirective,
    RightTooltipDirective,
    BottomTooltipDirective,
    ForceFocusDirective,
    MatTooltipModule
  ]
})
export class DirectivesModule { }
