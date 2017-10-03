import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
@Injectable()
export class MarvelService {

private baseUrl: string ="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=df861dd34ae8323fedd1c811a5491d4f&hash=9407f9a5cc65548008ad36fd3996e509&limit=50";
private searchUrl: string ="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=df861dd34ae8323fedd1c811a5491d4f&hash=9407f9a5cc65548008ad36fd3996e509&nameStartsWith=";
private characterUrl: string ="http://gateway.marvel.com/v1/public/characters/"

key="?ts=1&apikey=df861dd34ae8323fedd1c811a5491d4f&hash=9407f9a5cc65548008ad36fd3996e509"  
  constructor(private http: Http) { }

  thingISearched;
  
  getCharacters(): Observable<any> {

    return this.http.get(this.baseUrl)
      .map(result => {
        return result.json()
      })

  }

  getSearchHeroes(search): Observable<any> {

    return this.http.get(this.searchUrl+search)
      .map(result => {
        return result.json()
      })
  }

  getOneHero(currentCharacter): Observable<any> {

    return this.http.get(this.characterUrl+currentCharacter+this.key)
      .map(result => {
        return result.json()
      })
  }
}