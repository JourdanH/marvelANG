import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes;
  showMore;
  
 
 constructor(private marvelService: MarvelService){}
   
  
    getHeroes(){
      this.marvelService.getCharacters()
      .subscribe(
        marvelHero => {
          this.heroes = marvelHero.data.results;
        }
      )
    }

    getSearchCharacter($event){
      this.marvelService.getSearchHeroes($event)
      .subscribe(
        marvelHero => {
          this.heroes = marvelHero.data.results;
        }
      )
    }
    
   oneHero(data){
      this.showMore=true;
      this.marvelService.getOneHero(data)
        .subscribe(
         marvelHero => {
           this.heroes = marvelHero.data.results;
        })
    }

    goHome(){
      this.getHeroes();
        this.showMore=false;
      
    }

  ngOnInit(){
    this.getHeroes()
  
  }



}

