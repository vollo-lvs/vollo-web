import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { beheerScholenReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { BeheerScholenStoreEffects } from './effects';
import { BeheerScholenStoreService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('beheerScholen', beheerScholenReducer),
    EffectsModule.forFeature([BeheerScholenStoreEffects])
  ],
  providers: [BeheerScholenStoreService]
})
export class BeheerScholenStoreModule {}
