import { Link } from 'react-router-dom'
import styles from './TipoPokemon.module.css'

export const TipoPokemon = ({types}) => {
    return (
        <div className={styles['tipos-pokemons']}>
            {types.map(( tipo ) => (
                <Link to={`/species/${tipo.type.name}`} className={`${styles['tipo-pokemon-single']} type-${tipo.type.name}`}>
                    <img src={`/assets/imgs/${tipo.type.name}.svg`} alt={`Imagem do ${tipo.type.name}`}/>
                    <span >{tipo.type.name}</span>
                </Link>
            ))}
        </div>
    )
} 