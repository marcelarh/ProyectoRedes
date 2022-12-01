import { Component } from '@angular/core';
import { Map, Marker, marker, tileLayer } from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ProyectoRedes'; 


  ngAfterViewInit(): void {
    const map = new Map('map').setView([23.685, -102.041], 13);

    map.on('click', this.onMapClick);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
     const markerItem = marker([21.846430596051185, -102.31547934589416]).addTo(map).bindPopup("Casa Inge");
    
     map.fitBounds([
      [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
     ])
    ;
    
  }

  onMapClick(e:any) {
    console.log(e)
    let corX = e.latlng.lat
    let corY = e.latlng.lng

    // const markerItem = marker([e.latlng.lat, e.latlng.lng]).addTo(map).bindPopup("Punto");
    // map.fitBounds([
    //   [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
    //  ])
    // ;
}
}
