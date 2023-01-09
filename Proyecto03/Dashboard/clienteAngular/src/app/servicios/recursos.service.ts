import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }
  
  obtenerDatos() {
    return this.http.get('https://www.econdb.com/api/series/CPIES/?format=json')
  }
}
