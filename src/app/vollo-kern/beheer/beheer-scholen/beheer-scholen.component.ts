import { Component, OnInit } from '@angular/core';
import { GridOptions, RowClickedEvent, ColDef } from 'ag-grid-community';
import { BeheerScholenStoreService } from '../../vollo-kern-store/beheer-scholen-store';
import { AgGridService } from '../../common/ag-grid.service';

@Component({
  selector: 'vollo-beheer-scholen',
  templateUrl: './beheer-scholen.component.html',
  styleUrls: ['./beheer-scholen.component.scss'],
})
export class BeheerScholenComponent implements OnInit {
  gridOptions = this.agGridService.defaultOptions();
  columnDefs = <ColDef[]>[
    { headerName: 'ID', field: 'id', hide: true },
    { headerName: 'Naam', field: 'naam', width: 300 },
  ];
  rowData: any;

  constructor(
    private beheerScholenStoreService: BeheerScholenStoreService,
    private agGridService: AgGridService
  ) {}

  ngOnInit() {
    this.rowData = this.beheerScholenStoreService.scholen$;
    this.beheerScholenStoreService.ophalen();
  }
}
