import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-share-location-box',
  templateUrl: './share-location-box.component.html',
  styleUrls: ['./share-location-box.component.scss']
})
export class ShareLocationBoxComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: null,
      lat: null,
      lon: null,
      type: ['business'],
      logo: null,
      details: null,
    })
  }

  cancel() {
    this.storageService.clear();
  }

  getLatLong(evt: { lat: number, lon: number }) {
    this.form.controls['lat'].setValue(evt.lat);
    this.form.controls['lon'].setValue(evt.lon)
  }

  save() {
    this.storageService.store(this.form.getRawValue());
  }

  getImage(evt: File) {
    this.form.controls['logo'].setValue(evt);
  }

  getDetails(evt: string) {
    this.form.controls['details'].setValue(evt);
  }
}
