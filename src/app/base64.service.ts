import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Base64Service
{ 
  constructor(private _http: HttpClient) 
  { 
    console.log("funcionando servicio");
  }
  
  obtenerUsuarios() 
  {
    return this._http.get(`http://127.0.0.1:8000/reporte_usuario2`);
  }
}

