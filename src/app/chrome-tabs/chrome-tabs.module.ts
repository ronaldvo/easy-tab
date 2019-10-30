import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChromeTabsComponent } from './chrome-tabs.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared-components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    SharedModule
  ],
  declarations: [
    ChromeTabsComponent
  ],
  exports: [
    ChromeTabsComponent
  ]
})
export class ChromeTabsModule { }
