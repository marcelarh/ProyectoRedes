import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioApiService {

  constructor(private http: HttpClient) { }


  setDesaparecido(desaparecido:any): Observable<any>{
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log(desaparecido);
    const params = JSON.stringify({
        "nombre": desaparecido[''],
        "primape": desaparecido[''],
        "segape": desaparecido[''],
        "pais": desaparecido[''],
        "estado": desaparecido[''],
        "claveEntidad": desaparecido[''],
        "municipio": desaparecido[''],
        "origen": desaparecido[''],
        "nacionalidad": desaparecido[''],
        "sexo": desaparecido[''],
        "fecha_nac": desaparecido[''],
        "visto_ultima": desaparecido[''],
        "autoridad": desaparecido[''],
        "coordenadaX": desaparecido[''],
        "coordenadaY": desaparecido['']
      });
    return this.http.post('http://localhost:6007/api/general/setDesaparecido', params, {
      headers: httpHeaders,
    });
  }

  getDesaparecido(id: string): Observable <any>{
    return this.http.get('http://localhost:6007/api/general' + '/getDesaparecido/'+id);
  }
}
