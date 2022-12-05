import { Component } from '@angular/core';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { circleMarker, LatLng, Map, Marker, marker, tileLayer } from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ProyectoRedes'; 


  ngAfterViewInit(): void {
    const map = new Map('map').setView([23.685, -102.041], 13);

    //map.on('click', this.onMapClick);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    //Eventos de mapa 

    map.on('click',(e: {
      latlng: LatLng
    }) => {      
       
          console.log('click',e.latlng.lat, e.latlng.lng);
          console.log('Se añadió marcador');
          marker(e.latlng).addTo(map).bindPopup(e.latlng.toString()); 
          //marker(e.latlng).addTo(map).bindPopup("Punto"); 
    });
    
  }

}
