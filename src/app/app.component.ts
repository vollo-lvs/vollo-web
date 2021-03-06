import { Component } from '@angular/core';
import {
  AuthenticatieStoreService,
  LeerlingStoreService,
  UiStoreService
} from './vollo-kern/vollo-kern-store';
import { delay, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'vollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vollo';
  authenticatie$ = this.authenticatieStoreService.authenticatie$;
  foutmeldingen$ = this.uiStoreService.foutmeldingen$;
  toonLeerlingPaneel$ = this.leerlingStoreService.geselecteerd$.pipe(map(id => !!id));
  uitstaandeRequests = false;
  uitstaandeRequests$ = this.uiStoreService.aantalUitstaandeRequests$.pipe(
    delay(0),
    map(n => n > 0)
  );

  constructor(
    private authenticatieStoreService: AuthenticatieStoreService,
    private uiStoreService: UiStoreService,
    private leerlingStoreService: LeerlingStoreService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'parent',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/noun_parent_5036.svg')
    );

    this.uiStoreService.aantalUitstaandeRequests$
      .pipe(delay(0))
      .subscribe(n => (this.uitstaandeRequests = n > 0));
  }

  uitloggen() {
    this.authenticatieStoreService.uitloggen();
  }
}
