import { Component, OnInit } from '@angular/core';
import { PersonajeApiService } from './personaje/compartir/personaje-api.service';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  character: any;
  allPersonajes!: Observable<any>;
  lowValue = 0;
  highValue = 5;
  length = 0;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 50, 100];

  constructor(private personajeSvc: PersonajeApiService) {}

  ngOnInit() {
    this.getPersonajes();
  }
  getPersonajes() {
    this.allPersonajes = this.personajeSvc.getAllPersonajes();
    if (this.allPersonajes) {
      this.allPersonajes.subscribe((personajes: any[]) => {
        this.length = personajes.length;
      });
    }
  }


  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}





