import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {

  modalOptions: any = {};

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
  }

}
