import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  marvelHero;


 constructor(private marvelService: MarvelService){}
   
  
    getHeroes(){
      this.marvelService.getCharacters()
      .subscribe(
        marvelHero => {
          this.marvelHero = marvelHero.data.results;
        }
      )
    }

    getSearchCharacter($event){
      this.marvelService.getSearchHeroes($event)
      .subscribe(
        marvelHero => {
          this.marvelHero = marvelHero.data.results;
        }
      )
    }



  ngOnInit(){
    this.getHeroes()
  
  }



}

