import { Component, OnInit } from '@angular/core';
import { ComicsApiService } from './comic/compartir/comics-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})

export class ComicsComponent implements OnInit{
character: any; 

constructor (private comicSvc: ComicsApiService) { }

  allComics!: Observable<any>;

 ngOnInit(){
 this.getComics();
 }

  
 getComics(){
  this.allComics = this.comicSvc.getAllComics();
 }

}




