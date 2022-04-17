import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http:HttpClient) { }
  getPokemons(){
    let url = "https://pokeapi.co/api/v2/pokemon/"
    return this.http.get(url);
  }
  getSinglePokemon(pokemonUrl:string){
    return this.http.get(pokemonUrl);
  }
  getAbilities(abilitiesUrl:string){
    return this.http.get(abilitiesUrl);
  }
}
