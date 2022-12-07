import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../Model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }


  setDesaparecido(desaparecido:persona): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log(desaparecido);

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
    
    return this.http.post('http://localhost:6007/api/general/setDesaparecido', params, {
      headers: httpHeaders,
    });
  }

  getDesaparecido(id: string): Observable <any>{
    return this.http.get('http://localhost:6007/api/general' + '/getDesaparecido/'+id);
  }
}
