import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VolloKernModule } from './vollo-kern/vollo-kern.module';
import { StoreModule } from '@ngrx/store';
import { InloggenComponent } from './vollo-kern/inloggen/inloggen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VolloMaterialModule } from './vollo-material.module';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MijnGroepenComponent } from './vollo-kern/mijn-groepen/mijn-groepen.component';
import { AgGridModule } from 'ag-grid-angular';
import { GroepComponent } from './vollo-kern/groep/groep.component';
import { VolloKernStoreModule } from './vollo-kern/vollo-kern-store';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './vollo-kern/common/http-interceptors';
import { GroepScoresComponent } from './vollo-kern/score/groep-scores/groep-scores.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: 'inloggen', component: InloggenComponent, data: { titel: 'Inloggen' } },
  { path: 'mijn-groepen', component: MijnGroepenComponent, data: { titel: 'Mijn groepen' } },
  {
    path: 'mijn-groepen/groep/:groepId',
    component: GroepComponent,
    data: { kruimels: ['mijn-groepen'], titel: 'Groep' },
  },
  {
    path: 'mijn-groepen/scores',
    component: GroepScoresComponent,
    data: { kruimels: ['mijn-groepen'], titel: 'Scores' },
  },
  {
    path: '',
    redirectTo: '/inloggen',
    pathMatch: 'full',
    data: { titel: 'Start' },
  },
];

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    AgGridModule.withComponents([]),
    VolloMaterialModule,
    VolloKernModule,
    StoreModule.forRoot({}),
    VolloKernStoreModule,
    PlotlyModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [MatIconRegistry, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    matIconRegistry.setDefaultFontSetClass('fa');
  }
}
