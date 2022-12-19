import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import { circleMarker, LatLng, Map, Marker, marker, tileLayer } from 'leaflet';
import { persona } from '../Model/persona.model';
import Swal from 'sweetalert2'
import { ServicioApiService } from '../services/servicio-api.service';


@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent {
  PersonaVar : persona = new persona;

  nombre?: String;
  primape?: String;
  segape?: String;
  pais?: String;
  estado?: String;
  claveEntidad?: number;
  municipio?: String;
  origen?: String;
  nacionalidad?: String;
  sexo?: String;
  fecha_nac?: String;
  visto_ultima?: String;
  autoridad?: String;
  coordenadaX?: number;
  coordenadaY?: number;  

  bandera: Boolean = true;

  constructor(private servicioApiService : ServicioApiService){}



  ngAfterViewInit(): void {
    const map = new Map('map').setView([23.685, -102.041], 13);

    

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



    //Eventos de mapa 

    map.on('click',(e: {
      latlng: LatLng
    }) => {      
       
          // console.log('click',e.latlng.lat, e.latlng.lng);
          // console.log('Se añadió marcador');
          
          
          if(this.bandera){
            this.bandera = false;

            this.coordenadaX = e.latlng.lat
            this.coordenadaY = e.latlng.lng
            //marker(e.latlng).addTo(map).bindPopup(e.latlng.toString());
            const markerItem = marker(e.latlng).addTo(map).bindPopup("Punto");

            markerItem.on('dblclick', () => {
              map.removeLayer(markerItem); 
              this.bandera = true; 
            });
          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'warning',
              title: 'Ya existe un punto en el mapa',
              showConfirmButton: false,
              timer: 800
            })
          }
    });
    
  }



  save(){

    if(this.nombre && this.primape && this.segape && this.pais && this.estado && this.claveEntidad && this.municipio && this.origen && this.nacionalidad && this.sexo && this.fecha_nac && this.visto_ultima && this.autoridad && this.coordenadaX && this.coordenadaY){
      this.PersonaVar.nombre = this.nombre
      this.PersonaVar.primape = this.primape
      this.PersonaVar.segape = this.segape
      this.PersonaVar.pais = this.pais
      this.PersonaVar.estado = this.estado
      this.PersonaVar.claveEntidad = this.claveEntidad
      this.PersonaVar.municipio = this.municipio
      this.PersonaVar.origen = this.origen
      this.PersonaVar.nacionalidad = this.nacionalidad
      this.PersonaVar.sexo = this.sexo
      this.PersonaVar.fecha_nac = this.fecha_nac
      this.PersonaVar.visto_ultima = this.visto_ultima
      this.PersonaVar.coordenadaY = this.coordenadaY
      this.PersonaVar.autoridad = this.autoridad
      this.PersonaVar.coordenadaX = this.coordenadaX

      const params = JSON.stringify({
      "nombre": this.PersonaVar.nombre,
      "primape": this.PersonaVar.primape,
      "segape": this.PersonaVar.segape,
      "pais": this.PersonaVar.pais,
      "estado": this.PersonaVar.estado,
      "claveEntidad": this.PersonaVar.claveEntidad,
      "municipio": this.PersonaVar.municipio,
      "origen": this.PersonaVar['origen'],
      "nacionalidad": this.PersonaVar.nacionalidad,
      "sexo": this.PersonaVar.sexo,
      "fecha_nac": this.PersonaVar.fecha_nac,
      "visto_ultima": this.PersonaVar.visto_ultima,
      "autoridad": this.PersonaVar.autoridad,
      "coordenadaX": this.PersonaVar.coordenadaX,
      "coordenadaY": this.PersonaVar.coordenadaY
    });

    console.log(params);

    this.servicioApiService.createUser(this.PersonaVar).subscribe(data => {
      console.log(data);
    });


      
    Swal.fire({
      title: 'Persona Agregada!',
      text: 'La persona ha sido agregada a la base de datos con exito',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
      
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Existen Campos vacios',
        showConfirmButton: false,
        timer: 800
      })
    }
  }
}
