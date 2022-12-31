import { Component, OnInit } from '@angular/core';
import { film } from './film.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  allFilms: Array<film> = [
    new film('Alphaville, une étrange aventure de Lemmy Caution', '../../assets/img/alphaville.jpeg'),
    new film('Hanabi', '../../assets/img/hanabi.webp'),
    new film('Akira', '../../assets/img/akira.webp'),
    new film('Once upon a time in America', '../../assets/img/OUATIA.jpg'),
    new film('Barry Lyndon', '../../assets/img/BL.jpeg'),
  ];

  currentFilmName: String = '';
  currentFilmPosterUri: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  public showFilmPoster(film: film): void{
    if (this.currentFilmPosterUri !== film.getposterUri()){
      this.currentFilmName = film.getTitle();
      this.currentFilmPosterUri = film.getposterUri();
    } else {
      this.currentFilmName = '';
      this.currentFilmPosterUri = '';
    }
  }

}
