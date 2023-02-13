import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiButtonComponent} from './ui-button/ui-button.component';
import { UiMapComponent } from './ui-map/ui-map.component';
import { UiUploadImageComponent } from './ui-upload-image/ui-upload-image.component';


@NgModule({
  declarations: [
    UiButtonComponent,
    UiMapComponent,
    UiUploadImageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiButtonComponent,
    UiMapComponent,
    UiUploadImageComponent
  ]
})
export class UiModuleModule {
}
