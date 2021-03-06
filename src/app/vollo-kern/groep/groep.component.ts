import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid-community';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { Groep } from './groep.model';
import { of } from 'rxjs';
import { GroepStoreService } from '../vollo-kern-store/groep-store';
import { LeerlingStoreService } from '../vollo-kern-store/leerling-store';
import * as moment from 'moment';
import { AgGridService } from '../common/ag-grid.service';

@Component({
  selector: 'vollo-groep',
  templateUrl: './groep.component.html',
  styleUrls: ['./groep.component.scss'],
})
export class GroepComponent implements OnInit {
  @ViewChild('agGrid')
  agGrid: AgGridAngular;

  gridOptions = this.agGridService.defaultOptions({
    onRowClicked: (event: RowClickedEvent) => {
      this.leerlingStoreService.selecteren(event.data.leerling.id);
    },
  });
  leerlingColDefs = <ColDef[]>[
    { headerName: 'ID', field: 'leerling.id', hide: true },
    { headerName: 'Roepnaam', field: 'leerling.roepnaam', width: 200, pinned: true },
    { headerName: 'Tussenvoegsel', field: 'leerling.tussenvoegsel', width: 100, pinned: true },
    { headerName: 'Achternaam', field: 'leerling.achternaam', width: 300, pinned: true },
    {
      headerName: 'Geslacht',
      field: 'leerling.geslacht',
      width: 100,
      valueFormatter: () => '',
      cellClass: (params) =>
        'fa ' +
        (params.value === 'MAN'
          ? 'fa-mars'
          : params.value === 'VROUW'
          ? 'fa-venus'
          : 'fa-genderless'),
    },
  ];
  columnDefs = <ColDef[]>[];
  rowData: any;

  constructor(
    private groepStoreService: GroepStoreService,
    private leerlingStoreService: LeerlingStoreService,
    private route: ActivatedRoute,
    private agGridService: AgGridService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get('groepId'))))
      .subscribe((groepId) => this.groepStoreService.ophalen(parseInt(groepId)));

    this.rowData = this.groepStoreService.groep$.pipe(
      tap((groep: Groep) => {
        this.columnDefs = groep
          ? [
              ...this.leerlingColDefs,
              ...[...groep.toetsen]
                .sort((a, b) => moment(b.datum).diff(a.datum))
                .map((toetsafname) => {
                  return <ColDef>{
                    headerName: toetsafname.toets.omschrijving,
                    headerTooltip: `${toetsafname.toets.soort} ${toetsafname.datum}`,
                    field: 'scores.' + toetsafname.id,
                    width: 100,
                  };
                }),
            ]
          : [];
      }),
      map((groep: Groep) => (groep ? groep.leerlingen : []))
    );
  }
}
