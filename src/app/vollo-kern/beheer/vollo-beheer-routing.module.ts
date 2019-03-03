import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeheerComponent } from './beheer/beheer.component';
import { BeheerScholenComponent } from './beheer-scholen/beheer-scholen.component';
import { BeheerIndexComponent } from './beheer-index/beheer-index.component';

const beheerRoutes: Routes = [
  {
    path: 'beheer',
    component: BeheerComponent,
    children: [
      { path: '', component: BeheerIndexComponent },
      { path: 'scholen', component: BeheerScholenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(beheerRoutes)],
  exports: [RouterModule]
})
export class VolloBeheerRoutingModule {}
