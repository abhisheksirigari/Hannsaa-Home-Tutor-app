import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnInit {
  title = 'meta data example';

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private fb: FormBuilder) { }

  metadataForm: FormGroup;

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag(
      { name: 'description', content: 'meta data template' }
    );


    this.loadMetaForm();
  }

  loadMetaForm() {
    this.metadataForm = this.fb.group({
      title: ['Hansa Tutor'],
      metadata_pages: this.fb.array([ this.createPageItem() ])
    });
  }

  createPageItem(): FormGroup {
    return this.fb.group({
      pagename: ['meta-data'],
      metadata_labels: this.fb.array([ this.createItem() ]) 
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['Hansa'],
      keywords: ['Hansa, Tutor, online tutor'],
      description: ['online tutor, online learning']
    });
  }

  get metadatapages() {
    return this.metadataForm.get('metadata_pages') as FormArray;
  }

  getMetaDatacontrols(item) {
    return item['controls'].metadata_labels['controls'] as FormArray;
  }

  get metadatalabels() {
    return this.metadataForm.get('metadata_pages')['metadata_labels'] as FormArray;
  }

  addrow() {
    this.metadatapages.push( this.createPageItem() );
  }

  deleterow(item, mainIndex: any, subIndex: any) {
    item.removeAt(subIndex);
  }

  // deleterow(index: any) {
  //   this.metadataForm.get('metadata_pages')['metadata_labels']
  //   this.metadatalabels.removeAt(index);
  // }


  convertToJson() {
    
  }

}
