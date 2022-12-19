import { Component } from '@angular/core';
import { ServicioApiService } from '../services/servicio-api.service';

@Component({
  selector: 'app-list-registros',
  templateUrl: './list-registros.component.html',
  styleUrls: ['./list-registros.component.css']
})
export class ListRegistrosComponent {
  users: any;
  constructor(private servicioApiService : ServicioApiService){}

  ngOnInit() {
    this.servicioApiService.getDesaparecido().subscribe(data => {
      this.users = data;
    });
  }
}
