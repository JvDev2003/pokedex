import axios from "axios";
import { useEffect, useState } from "react";

export const Create = () =>{
    // eslint-disable-next-line
    const [pokemons, setPokemons] = useState([])
    useEffect(() =>{
        getPokemon();
    },[])

    const getPokemon = () => {
        var endPoints = [];
        for (let i = 1; i <= 1000; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        var response = axios.all(endPoints.map((endpoint) => axios.get(endpoint))).then((res)=>{setPokemons(res)})
        console.log(pokemons)
        return response;
    }

    console.log(pokemons)

    return(
        <div className="conteiner">
            
            {pokemons.map((pokemon,key) => (
                <div className={pokemon.data.types[0].type.name + ` pokemon`}>
                <div className='imagemConteiner'>
                <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name}/>
                </div>
                <div className='info'>
                    <span className='number'>{pokemon.data.id}</span>
                    <h3 className='name'>{pokemon.data.species.name}</h3>
                    <div className='conteinerType'>{pokemon.data.types.map((tipo,key) =>(<img src={`https://veekun.com/dex/media/types/en/${tipo.type.name}.png`}/>))}</div>
                </div>
                </div> 
            ))}
        </div>
    )

}
