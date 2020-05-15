import { Component, OnInit } from '@angular/core';
import { ScoreStoreService } from '../../vollo-kern-store/score-store';
import { GridOptions, ColDef, FilterChangedEvent } from 'ag-grid-community';
import { GroepScore } from '../../common/model/groep-score.model';
import { AgGridService } from '../../common/ag-grid.service';

@Component({
  selector: 'vollo-groep-scores',
  templateUrl: './groep-scores.component.html',
  styleUrls: ['./groep-scores.component.scss'],
})
export class GroepScoresComponent {
  scores$ = this.scoreStoreService.scores$;
  filteredScores: GroepScore[] = [];
  tabIndex: number = 0;

  gridOptions = this.agGridService.defaultOptions({
    onFilterChanged: (event: FilterChangedEvent) => {
      this.filteredScores = (<any>event.api.getModel()).rootNode.childrenAfterFilter.map(
        (n) => n.data
      );
    },
  });
  columnDefs = <ColDef[]>[
    { headerName: 'Achternaam', field: 'achternaam', width: 170 },
    { headerName: 'Toets', field: 'toetsOmschrijving', width: 170 },
    { headerName: 'Datum', field: 'datum', width: 130, sort: 'desc' },
    { headerName: 'Score', field: 'cijferScore', width: 100, cellStyle: { textAlign: 'right' } },
  ];

  constructor(private scoreStoreService: ScoreStoreService, private agGridService: AgGridService) {
    this.scoreStoreService.ophalen();
  }

  setTabIndex(index: number) {
    this.tabIndex = index;
  }
}
