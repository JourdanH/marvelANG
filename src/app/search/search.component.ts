import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarvelService } from '../marvel.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@Output() 
sendSearch= new EventEmitter<any>();
  constructor(private marvelService: MarvelService){}

 marvelHero; 
 thingISearched;
 searchCharacter;

  ngOnInit() {
  }

// getSearchCharacter(thingISearched){
//       this.marvelService.getSearchHeroes()
//       .subscribe(
//         marvelHero => {
//           this.marvelHero = marvelHero.data.results;
//         }
//       )
//     }
searchHero(){
  this.thingISearched =this.searchCharacter
  this.sendSearch.emit(this.thingISearched)
  
}
}
