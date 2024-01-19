import { useEffect, useState } from "react"

const App = ()=>{
  let [pokemonNumber, setPokemonNumber] = useState(10);
  let [pokemonName, setPokemonName]= useState('');


  function increaseNumber(){
    setPokemonNumber (pokemonNumber+1)
  }
  useEffect(()=>{
    //fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    //.then(result=>result.json())
    //.then(data=>setPokemonName(data.name))
    searchPokemon(pokemonNumber)
  }, [pokemonNumber]);

let searchPokemon = async pokemosnNumber=> {
  const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
  const data= await response.json()
  setPokemonName(data.name)
}

  return(
  <>
    <button onClick={increaseNumber}>Next</button>
    <div>{pokemonNumber}- {pokemonName}</div>
  </>)
}

export {App}