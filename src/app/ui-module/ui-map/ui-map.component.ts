import {AfterViewInit, Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import * as L from 'leaflet';
import {Map, Marker} from 'leaflet';


@Component({
  selector: 'ui-map',
  templateUrl: './ui-map.component.html',
  styleUrls: ['./ui-map.component.scss']
})
export class UiMapComponent implements OnInit, AfterViewInit {

  @Output()
  latLong = new EventEmitter<{ lat: number, lon: number }>();

  @Output()
  locationDetails = new EventEmitter<string>();

  private map?: Map;

  marker?: Marker;

  currentLocation: any;

  detail: string = `location...`;

  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 0],
      iconUrl: 'assets/images/marker-icon.png',
    })
  };

  customPopup = '<section class="popup">' +
    '<header> Location Details</header>' +
    `<input id="location" value=` + this.detail + `> ` +
    '<button class="popup-btn">edit</button>' +
    '</section>';


  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    this.initMap();
    this.mapClicked();
    this.locationDetails.emit(this.detail);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [35, 51],
      zoom: 2
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      opacity: 0.7,
      maxZoom: 19,
      detectRetina: true,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);


    this.getCurrentLocation();
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition((res) => {

      this.currentLocation = res.coords;

      this.addMarker(this.currentLocation.latitude, this.currentLocation.longitude)
    }, () => {
      let lat = 35;
      let lon = 51
      this.addMarker(lat, lon);
    });

  }

  addMarker(lat: number, lon: number) {
    this.marker = L.marker([lat, lon], {
      icon: L.icon({iconUrl: 'https://www.otaghak.com/assets/images/searchpage/pin-selected.svg'}),
      draggable: true
    });

    // @ts-ignore
    this.marker?.addTo(this.map);
    this.marker?.bindPopup(this.customPopup);
    this.latLong.emit({lat, lon});
    this.markerDragend();
  }

  mapClicked() {
    this.map?.on("click", (e: any) => {
      this.marker?.openPopup();
    });

  }

  markerDragend() {
    this.marker?.on('dragend', (e: any) => {
      const coords = e.target.getLatLng();
      this.latLong.emit({lat: coords.lat, lon: coords.lng})
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (event.target.classList.contains("popup-btn")) {
      this.detail = (<HTMLInputElement>document.getElementById('location')).value;
      this.locationDetails.emit(this.detail);
      this.map?.closePopup();
    }

  }

  ngOnDestroy() {
    this.map?.clearAllEventListeners;
    this.map?.remove();
  };

}
