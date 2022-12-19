import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../Model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }


  /*setDesaparecido(desaparecido:persona): Observable<any>{
    console.log(desaparecido);

    return this.http.post('http://192.168.68.119/api.php', {
      "usuario": params,
      "estado": desaparecido.estado
    });
    return this.http.post('http://192.168.68.119/api.php', {
      "nombre": desaparecido.nombre,
      "app": desaparecido.primape,
      "apm": desaparecido.segape,
      "pais": desaparecido.pais,
      "estado": desaparecido.estado,
      "centidad": desaparecido.claveEntidad,
      "muni": desaparecido.municipio,
      "origen": desaparecido.origen,
      "nacion": desaparecido.nacionalidad,
      "sex": desaparecido.sexo,
      "fnac": desaparecido.fecha_nac,
      "lug_v_ulti": desaparecido.visto_ultima,
      "autoridad": desaparecido.autoridad,
      "posx": desaparecido.coordenadaX,
      "posy": desaparecido.coordenadaY
    }, {
      headers: httpHeaders,
    });
  }*/
  createUser(desaparecido:persona): Observable<any>{
    const params = JSON.stringify({
      "nombre": desaparecido['nombre'],
      "primape": desaparecido['primape'],
      "segape": desaparecido['segape'],
      "pais": desaparecido['pais'],
      "estado": desaparecido['estado'],
      "claveEntidad": desaparecido['claveEntidad'],
      "municipio": desaparecido['municipio'],
      "origen": desaparecido['origen'],
      "nacionalidad": desaparecido['nacionalidad'],
      "sexo": desaparecido['sexo'],
      "fecha_nac": desaparecido['fecha_nac'],
      "visto_ultima": desaparecido['visto_ultima'],
      "autoridad": desaparecido['autoridad'],
      "coordenadaX": desaparecido['coordenadaX'],
      "coordenadaY": desaparecido['coordenadaY']
    });

    console.log(params);
    return this.http.post('../../api.php',{
      usuario: params,
      estado: desaparecido.estado
    });
  }
  getDesaparecido(): Observable<any>{
    return this.http.get('../../api.php');
  }
}
