import { Link } from "react-router-dom"
import { ImagePokemon } from "../ImagePokemon/ImagePokemon"

import styles from './PokemonDetail.module.css'
import { TipoPokemon } from "../TipoPokemon/TipoPokemon"
import { useState } from "react"

export const PokemonDetail = ({pokemon}) => {

    const baseStat = (name, stat) => {
        let width = 0;
        let max = 0;

        switch (name) {
          case 'hp':
            max = 255;
            width = (stat / max) * 100;
            break;
          case 'attack':
            max = 190;
            width = (stat / max) * 100;
            break;
          case 'defense':
            max = 230;
            width = (stat / max) * 100;
            break;
          case 'special-attack':
            max = 194;
            width = (stat / max) * 100;
            break;
          case 'special-defense':
            max = 230;
            width = (stat / max) * 100;
            break;
          case 'speed':
            max = 180;
            width = (stat / max) * 100;
            break;
          default:
            break;
        }
    
        return <progress value={stat} max={max} style={{ width: `${width}%` , backgroundColor:'#797878', borderRadius:"15px"}} />;
    }

    return (
        <div>
            <div className={`type-${pokemon.types[0].type.name} ${styles['header-pokemon-detail']}`}>
                <h2 className={styles['title-name']}>{pokemon.name}</h2>
                <div className={styles['pokemons-history']}>
                    <Link to={`/pokemons/${ pokemon.id <= 1 ? (pokemon.id) : (pokemon.id - 1)}`}><i class="bi bi-chevron-left"></i></Link>
                    <ImagePokemon id={pokemon.id} name={pokemon.name} key={pokemon.id} />
                    <Link to={`/pokemons/${ pokemon.id >= 1302 ? (pokemon.id) : (pokemon.id + 1)}`}><i class="bi bi-chevron-right"></i></Link>
                </div>

                <div className={styles['details-pokemon']}>
                    <TipoPokemon types={pokemon.types}/>
                    <div className={styles['about-pokemon']}>
                        <h3>Sobre</h3>
                        <div className={styles['about-pokemon-details']}>
                            <div className={styles['grid-detail-pokemon']}>
                                <div className={styles['grid-single-pokemon']}>
                                    <span>
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 33 33" style={{ enableBackground: 'new 0 0 33 33' }}>
                                            <g>
                                            <path d="M32.5,31.704h-32c-0.144,0-0.28-0.062-0.375-0.17c-0.095-0.107-0.139-0.251-0.121-0.394l2.592-20.337
                                                c0.032-0.249,0.245-0.437,0.496-0.437h26.816c0.251,0,0.464,0.188,0.496,0.437l2.592,20.337c0.018,0.143-0.026,0.286-0.121,0.394
                                                C32.78,31.643,32.644,31.704,32.5,31.704z M1.068,30.704h30.864l-2.464-19.337H3.532L1.068,30.704z"/>
                                            <path d="M16.5,11.367c-2.777,0-5.036-2.259-5.036-5.035c0-2.777,2.259-5.036,5.036-5.036s5.036,2.259,5.036,5.036
                                                C21.536,9.108,19.277,11.367,16.5,11.367z M16.5,2.296c-2.225,0-4.036,1.811-4.036,4.036c0,2.225,1.811,4.035,4.036,4.035
                                                s4.036-1.811,4.036-4.035C20.536,4.107,18.725,2.296,16.5,2.296z"/>
                                            </g>
                                        </svg> {Math.floor(pokemon.weight * 0.1).toFixed(2).replace('.',',')} Kg
                                        
                                    </span>
                                    <span>
                                        Peso
                                    </span> 
                                </div>
                            </div>

                            <div className={styles['grid-single-pokemon']}>
                                <span><i class="bi bi-rulers"></i> {pokemon.height * 10} cm</span>
                                <span>
                                    Altura
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles['section-abilities']}>
                        <p className="h3">Habilidades</p>
                        <div className={styles['abilities-pokemon']}>
                            {pokemon.abilities.map(ability => <p className={`${styles['abilite-single']} type-${pokemon.types[0].type.name}`}>{ability.ability.name}</p>)}
                        </div>
                    </div>

                    <div className="p-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nulla reprehenderit in sapiente cum. Magni perspiciatis 
                        voluptate adipisci! Molestiae numquam quae, magni tempore commodi 
                        asperiores quos praesentium fuga unde laudantium nam!
                    </div>

                    <div className={styles['base-stats']}>
                        <p className="h2">Status do <span style={{textTransform:'capitalize'}}>{pokemon.name}</span></p>
                        <div className={styles['stats-detail-pokemon']}>
                            <div className={styles['stats-single']}>
                                <table className="table table-hover">
                                    {pokemon.stats.map( stat => (
                                        <tr style={{textTransform:"uppercase",fontWeight:"bold"}}>
                                            <td>{stat.stat.name}</td>
                                            <td>{stat.base_stat}</td>
                                            <td style={{minWidth:"300px"}}>
                                                {baseStat(stat.stat.name, stat.base_stat)}
                                            </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}