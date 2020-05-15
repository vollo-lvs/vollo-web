import { Injectable } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class AgGridService {
  constructor() {}

  defaultOptions(extraOptions?: Partial<GridOptions>) {
    return <GridOptions>{
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
      },
      ...extraOptions,
    };
  }
}
