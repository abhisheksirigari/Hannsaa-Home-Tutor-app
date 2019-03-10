import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  providers: [LanguagesService]
})
export class LanguagesComponent implements OnInit {
  tableData: Array<any>;

  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  constructor(private _tablesDataService: LanguagesService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.tableData = this._tablesDataService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}


