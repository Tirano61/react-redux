

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons ,startLoadingPokemons } from "../src/store/slices/pokemons";


export const PokemonApp = () => {

  const { pokemons, isLoading, page } = useSelector( state => state.pokemons );
  const dispach = useDispatch();

  useEffect(() => {
    dispach( getPokemons());
  
  }, [])
  

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>{`isLoading : ${ isLoading }`}</span>
      <ul>
        
        {
          pokemons.map( poke => (
          
            <li key={poke.name}>
              {poke.name}
            </li>


          ))
        }

      </ul>
      <button 
        // disabled
        onClick={() => dispach(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
