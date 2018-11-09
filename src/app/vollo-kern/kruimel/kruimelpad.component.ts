import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { KruimelService } from './kruimel.service';
import { select, Store } from '@ngrx/store';
import { VolloKernState, UiStoreSelectors } from '../vollo-kern-store';

@Component({
  selector: 'vollo-kruimelpad',
  templateUrl: 'kruimelpad.component.html',
  styleUrls: ['kruimelpad.component.scss']
})
export class KruimelpadComponent {
  paginatitel$ = this.store.pipe(select(UiStoreSelectors.selectPaginatitel));

  kruimels$ = this.router.events.pipe(
    filter(event => event instanceof ActivationEnd),
    distinctUntilChanged(),
    map((event: ActivationEnd) =>
      this.kruimelService.maakKruimelpad(event.snapshot.root.firstChild.data, this.router)
    ),
    tap(k => console.info('kruimel', k))
  );

  constructor(
    private router: Router,
    private kruimelService: KruimelService,
    private store: Store<VolloKernState.State>
  ) {}
}
