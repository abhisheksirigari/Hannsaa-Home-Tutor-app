import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-how-it-works',
  templateUrl: './edit-how-it-works.component.html',
  styleUrls: ['./edit-how-it-works.component.scss']
})
export class EditHowItWorksComponent implements OnInit {
  onClose: Subject<any>;

  modelData: any;
  defaultContent: any;
  
  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.defaultContent = this.modelData.defaultContent;
  }

  onContentChange(event: string) {
    this.defaultContent = event;
  }
  
  onSubmit() {
    this.onClose.next(this.defaultContent);
    this.bsModalRef.hide();
  }

  close() {
    this.bsModalRef.hide();
  }

}






