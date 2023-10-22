import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons =  ( page = 0) =>{

  return async ( dispach, getState ) =>{
    dispach( startLoadingPokemons() );
    //TODO peticion
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page *10}`);
    // const data = await resp.json();
    const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page *10}`);
    console.log(resp);
    
    dispach( setPokemons({ pokemons: resp.data.results, page: page + 1 }) )
  }


}