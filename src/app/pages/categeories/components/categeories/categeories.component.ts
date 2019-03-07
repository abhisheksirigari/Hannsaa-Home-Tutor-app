import { Component, OnInit } from '@angular/core';
import { CategeoriesService } from '../../../../shared/services/categeories.service';

@Component({
  selector: 'app-categeories',
  templateUrl: './categeories.component.html',
  styleUrls: ['./categeories.component.scss']
})
export class CategeoriesComponent implements OnInit {
  categeoriesData: Array<any>;
  
  /* pagination Info */
  pageSize = 5;
  pageNumber = 1;

  constructor(
    private _categeoriesService: CategeoriesService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._categeoriesService.getCategeories().subscribe( (data) => {
      this.categeoriesData = data;
    });
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}