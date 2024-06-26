import { Link } from 'react-router-dom';
import usePokemons from '../../../services/hooks/usePokemons';
import styles from './MenuLateral.module.css'
export const MenuLateral = () => {
    let tipos = usePokemons('https://pokeapi.co/api/v2/type');
    if (tipos.loading) {
        return <p>Carregando...</p>;
    }
    
    if (tipos.error) {
        return <p>Erro ao carregar dados</p>;
    }
    
    if (!tipos.data) {
        return null;
    }
    console.log(tipos.data[0])
    return (
        <div className={styles['menu-lateral']}>
            <h3 className='text-center'>Filtrar por tipos</h3>
            {tipos.data.map((tipo, index) => (
                <Link to={`/species/${tipo.id}`} key={index} className={`background-type-${tipo.name} text-white btn ${styles['btn-tipo-pokemon']}`}> 
                    <img src={`/assets/imgs/${tipo.name}.svg`} alt="" />
                    {tipo.name} ({tipo.pokemon.length})
                </Link>
            ))}
        </div>
    );
}