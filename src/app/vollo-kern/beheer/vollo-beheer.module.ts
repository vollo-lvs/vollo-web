import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeheerComponent } from './beheer/beheer.component';
import { VolloBeheerRoutingModule } from './vollo-beheer-routing.module';
import { BeheerScholenComponent } from './beheer-scholen/beheer-scholen.component';
import { VolloCommonModule } from '../common/vollo-common.module';
import { BeheerIndexComponent } from './beheer-index/beheer-index.component';
import { VolloMaterialModule } from '../../vollo-material.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [BeheerComponent, BeheerScholenComponent, BeheerIndexComponent],
  imports: [
    CommonModule,
    VolloBeheerRoutingModule,
    VolloCommonModule,
    VolloMaterialModule,
    AgGridModule.withComponents([])
  ]
})
export class VolloBeheerModule {}
