import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-upload-image',
  templateUrl: './ui-upload-image.component.html',
  styleUrls: ['./ui-upload-image.component.scss']
})
export class UiUploadImageComponent implements OnInit {

  @Output()
  uploadImage = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  upload($event: any) {
    if ($event.target.files.length > 0) {
      this.uploadImage.emit($event.target.files[0]);
    }
  }

}
