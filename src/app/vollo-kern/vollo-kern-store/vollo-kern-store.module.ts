import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const storeDevTools: ModuleWithProviders[] = !environment.production
  ? [StoreDevtoolsModule.instrument()]
  : [];

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
    StoreModule.forRoot(
      {},
      { runtimeChecks: { strictActionImmutability: false, strictStateImmutability: false } }
    ),
    EffectsModule.forRoot([]),
    storeDevTools,
  ],
})
export class VolloKernStoreModule {}
