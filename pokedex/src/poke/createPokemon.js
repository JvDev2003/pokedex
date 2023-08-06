import axios from "axios";
import { useEffect, useState } from "react";

export const Create = () =>{
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() =>{
        getPokemon();
    },[])

    const getPokemon = (gen = {inicio:1, fim:1010}) => {
        var endPoints = [];
        for (let i = gen.inicio; i <= gen.fim; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        axios.all(endPoints.map((endpoint) => axios.get(endpoint))).then((res)=>{setPokemons(res)})
    }

    const filtraGeracao = (gen) => {
        const geracoes = {
            0:{
                inicio: 1,
                fim: 151
            },
            1:{
                inicio: 152,
                fim: 251
            },
            2:{
                inicio: 252,
                fim: 386
            },
            3:{
                inicio: 387,
                fim: 493
            },
            4:{
                inicio: 494,
                fim: 649
            },
            5:{
                inicio: 650,
                fim: 721
            },
            6:{
                inicio: 722,
                fim: 809
            },
            7:{
                inicio: 810,
                fim: 905
            },
            8:{
                inicio: 906,
                fim: 1010
            }
        }
        getPokemon(geracoes[gen])
        
    }

    return(
        <div className="conteiner">
            <nav className="menus">
            <ul>
                <button onClick={() => getPokemon()}><b>Todos</b></button>
                <button onClick={() => filtraGeracao(0)}><b>1°Geração</b></button>
                <button onClick={() => filtraGeracao(1)}><b>2°Geração</b></button>
                <button onClick={() => filtraGeracao(2)}><b>3°Geração</b></button>
                <button onClick={() => filtraGeracao(3)}><b>4°Geração</b></button>
                <button onClick={() => filtraGeracao(4)}><b>5°Geração</b></button>
                <button onClick={() => filtraGeracao(5)}><b>6°Geração</b></button>
                <button onClick={() => filtraGeracao(6)}><b>7°Geração</b></button>
                <button onClick={() => filtraGeracao(7)}><b>8°Geração</b></button>
                <button onClick={() => filtraGeracao(8)}><b>9°Geração</b></button>
            </ul>
        </nav>

            {pokemons.map((pokemon,key) => (
                <div className='pokemon ' key={key}>
                <div className='imagemConteiner'>
                    <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name}/>
                </div>
                <div className='info'>
                    <span className='number'>{pokemon.data.id}</span>
                    <div className='name'><h3>{pokemon.data.name.split('-').map((nome)=>(<>{nome[0].toUpperCase() + nome.substring(1)}<br/></>))}</h3></div>
                    <div className='conteinerType'>{pokemon.data.types.map((tipo,key) =>(<img key={key} alt={tipo.type.name} src={`https://veekun.com/dex/media/types/en/${tipo.type.name}.png`}/>))}</div>
                </div>
                </div> 
            ))}
        </div>
    )

}
