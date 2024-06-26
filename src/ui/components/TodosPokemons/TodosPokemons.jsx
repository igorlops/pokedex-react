import { useState, useEffect } from 'react';
import styles from './TodosPokemons.module.css';
import CardPokemon from '../CardPokemon/CardPokemon';
import usePokemons from '../../../services/hooks/usePokemons';

const TodosPokemons = ({ url, search }) => {
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);

    const handleLoadMore = () => {
        setLimit(prevLimit => prevLimit + 12);
    };

    useEffect(() => {
        setOffset(0);
        setLimit(12); // Reseta o limite ao iniciar uma nova busca
    }, [search]);

    let apiUrl = `${url}offset=${offset}&limit=${limit}`;
    if (search) {
        apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=1000`; // Aumentamos o limite para garantir que todos os Pokémons sejam trazidos
    }

    const { data, loading, error } = usePokemons(apiUrl, search);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className={styles["container"]}>
                <div className={styles["area-pokemons"]}>
                    <CardPokemon data={data} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {loading && <div className='spin'>Carregando...</div>}
                    </div>
                </div>
            </div>
            {!search && (
                <div className={styles['rodape-home']}>
                    <button onClick={handleLoadMore} className={`${styles['btn']} ${styles['btn-more']}`}>
                        <span>Carregar mais</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default TodosPokemons;
