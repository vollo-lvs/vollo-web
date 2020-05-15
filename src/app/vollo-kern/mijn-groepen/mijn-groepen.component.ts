import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions, RowClickedEvent } from 'ag-grid-community';
import { Router } from '@angular/router';
import { MijnGroepenStoreService } from '../vollo-kern-store';

@Component({
  selector: 'vollo-mijn-groepen',
  templateUrl: './mijn-groepen.component.html',
  styleUrls: ['./mijn-groepen.component.scss'],
})
export class MijnGroepenComponent implements OnInit {
  @ViewChild('agGrid')
  agGrid: AgGridAngular;

  gridOptions = <GridOptions>{
    enableColResize: true,
    enableSorting: true,
    enableFilter: true,
    onRowClicked: (event: RowClickedEvent) => {
      this.router.navigate(['mijn-groepen', 'groep', event.data.id]);
    },
  };
  columnDefs = <ColDef[]>[
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'School', field: 'school.naam', width: 300 },
    { headerName: 'Groep', field: 'naam', width: 200 },
  ];
  rowData: any;

  constructor(private mijnGroepenStoreService: MijnGroepenStoreService, private router: Router) {}

  ngOnInit() {
    this.rowData = this.mijnGroepenStoreService.groepen$;
    this.mijnGroepenStoreService.ophalen();
  }
}
