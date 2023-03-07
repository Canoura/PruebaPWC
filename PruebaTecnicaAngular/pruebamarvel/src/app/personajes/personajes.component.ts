import { Component, OnInit } from '@angular/core';
import { PersonajeApiService } from './personaje/compartir/personaje-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor (private personajeSvc: PersonajeApiService){}
  allPersonajes: Observable<any> | undefined;

 ngOnInit(){
this.getPersonajes();
 }
  
 getPersonajes(){
  this.allPersonajes = this.personajeSvc.getAllPersonajes();
 }

}
