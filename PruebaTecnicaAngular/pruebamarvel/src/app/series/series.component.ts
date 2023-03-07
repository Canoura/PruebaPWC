import { Component, OnInit } from '@angular/core';
import { SeriesApiService } from './serie/compartir/series-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  character: any; 

constructor (private serieSvc: SeriesApiService) { }

  allSeries!: Observable<any>;

 ngOnInit(){
 this.getSeries();
 }

  
 getSeries(){
  this.allSeries = this.serieSvc.getAllSeries();
 }

}




