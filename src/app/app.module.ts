import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ShareLocationBoxComponent} from './home/share-location-box/share-location-box.component';
import {UiModuleModule} from "./ui-module/ui-module.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShareLocationBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModuleModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
