import { Link } from 'react-router-dom'
import { ImagePokemon } from '../ImagePokemon/ImagePokemon'
import { TipoPokemon } from '../TipoPokemon/TipoPokemon'
import styles from './CardPokemon.module.css'

const CardPokemon = ({data}) => {

    if(!data) {
      return <div className="spin">Carregando...</div>
    }
    return data.map((pokemon) => (
      <Link to={`/pokemons/${pokemon.id}`} className={`${styles['pokemon-single']} background-type-${pokemon.types[0].type.name}`}>
        <div className={styles['card-pokemon']}>
          <h2>{pokemon.name}</h2>
          <ImagePokemon id={pokemon.id} name={pokemon.name}/>
          <TipoPokemon types={pokemon.types}/>
        </div>
      </Link>
    ))
}

export default CardPokemon