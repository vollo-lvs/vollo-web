import { Component, Input } from '@angular/core';
import { Leerling } from '../../groep/leerling.model';
import { LeerlingStoreService } from '../../vollo-kern-store/leerling-store';
import { GridOptions, ColDef } from 'ag-grid-community';
import { AgGridService } from '../../common/ag-grid.service';

@Component({
  selector: 'vollo-leerling-historie',
  templateUrl: './leerling-historie.component.html',
  styleUrls: ['./leerling-historie.component.scss'],
})
export class LeerlingHistorieComponent {
  historie$ = this.leerlingStoreService.historie$;

  _leerling: Leerling;

  @Input()
  set leerling(value: Leerling) {
    this._leerling = value;
    this.leerlingStoreService.ophalenHistorie(value.id);
  }

  gridOptions = this.agGridService.defaultOptions();
  columnDefs = <ColDef[]>[
    { headerName: 'Tijdslijn', field: 'omschrijving', width: 150 },
    { headerName: 'Begin', field: 'datumBegin', width: 130, sort: 'desc' },
    { headerName: 'Einde', field: 'datumEinde', width: 130 },
  ];

  constructor(
    private leerlingStoreService: LeerlingStoreService,
    private agGridService: AgGridService
  ) {}
}
