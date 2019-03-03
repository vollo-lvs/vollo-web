import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatieStoreModule } from './authenticatie-store';
import { UiStoreModule } from './ui-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MijnGroepenStoreModule } from './mijn-groepen-store';
import { GroepStoreModule } from './groep-store';
import { LeerlingStoreModule } from './leerling-store';
import { ScoreStoreModule } from './score-store';
import { BeheerScholenStoreModule } from './beheer-scholen-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticatieStoreModule,
    BeheerScholenStoreModule,
    MijnGroepenStoreModule,
    GroepStoreModule,
    LeerlingStoreModule,
    ScoreStoreModule,
    UiStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class VolloKernStoreModule {}
