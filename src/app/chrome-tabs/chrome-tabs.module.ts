import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChromeTabsComponent } from './chrome-tabs.component';
import { DirectivesModule } from '../_directives/directives.module';
import { PipesModule } from '../_pipes/pipes.module';
import { SharedComponentsModule } from '../_shared-components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    SharedComponentsModule
  ],
  declarations: [
    ChromeTabsComponent
  ],
  exports: [
    ChromeTabsComponent
  ]
})
export class ChromeTabsModule { }
