import { Component } from '@angular/core';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pokemon';
   pokemons:Array<Pokemon>=[]
 
  selectedPokemon:selectedPokemon={
    name: '',
    height: 0,
    weight: 0
  };
  ability:[] | undefined

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe((data:any) => {
      this.pokemons = data['results'];
      console.log("pokemons", this.pokemons);
    });
  }
  openPokemon(pokemonUrl:string){
    console.log("clicked pokemon", pokemonUrl);
    this.pokemonsService.getSinglePokemon(pokemonUrl).subscribe((data:any) => {
      this.selectedPokemon = data;
      console.log("selectedPokemon", this.selectedPokemon);
    });
  }

  onSearch(event:any){
     let originalPokemons = this.pokemons;
     if(event.target.value.length>0){
     this.pokemons=this.pokemons.filter(res=>res.name.substring(0,event.target.value.length)===event.target.value)
      console.log("req_pokemon",this.pokemons);
     }else{
      location.reload();
     }
    }
}
export interface Pokemon{
  name: string,
  url: string,
  abilities: []
};
export interface selectedPokemon{
  name: string,
  height: number,

  weight: number,
};


