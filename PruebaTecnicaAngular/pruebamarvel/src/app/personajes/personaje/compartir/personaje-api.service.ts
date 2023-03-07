import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajeApiService {
PUBLIC_KEY = '17556370aa05dfb6038d0542e78dcb0e';
HASH = '0f7f6340c25ebaf1db4ba95911e3777c';
URL_API ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=17556370aa05dfb6038d0542e78dcb0e&hash=0f7f6340c25ebaf1db4ba95911e3777c&limit=100';

  constructor(private http: HttpClient) { }

  getAllPersonajes(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any)=> data.data.results))
  }
}
