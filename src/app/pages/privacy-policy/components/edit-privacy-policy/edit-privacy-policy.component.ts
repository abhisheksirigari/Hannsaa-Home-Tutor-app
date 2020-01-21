import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-edit-privacy-policy',
  templateUrl: './edit-privacy-policy.component.html',
  styleUrls: ['./edit-privacy-policy.component.scss']
})
export class EditPrivacyPolicyComponent  implements OnInit {
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






