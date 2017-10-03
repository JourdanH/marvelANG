import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarvelService } from '../marvel.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() sendSearch= new EventEmitter<string>();
    constructor(){}

  marvelHero; 
  thingISearched;
  searchCharacter;

    ngOnInit() {
    }

  searchHero(){
    if (this.searchCharacter !=""){
      this.thingISearched =this.searchCharacter
      this.sendSearch.emit(this.thingISearched)
    } else {this.thingISearched ="%"
      this.sendSearch.emit(this.thingISearched)
      alert("Please enter a valid search")
    }
    this.searchCharacter=""
  }
}
