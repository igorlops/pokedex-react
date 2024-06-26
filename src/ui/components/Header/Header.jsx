import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = () => {
        if (searchTerm.trim() !== '') {
            navigate(`/?search=${searchTerm.trim()}`);
        }
    };

    return (
        <div className={styles['titulo-home']}>
            <div className={styles['logo-pokemon']}>
                <Link to={`/`}><img src="/assets/imgs/pokemon.svg" alt="Logo do pokemon" /></Link>
            </div>
            <div className={styles['busca-pokemon']}>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className={`form-control ${styles['pesquisar-pokemon']}`} 
                        aria-label="Search pokemon" 
                        aria-describedby="button-search" 
                        id="pesquisar-pokemon" 
                        placeholder='Buscar pokemon'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button 
                        type="button" 
                        className={`btn btn-primary`} 
                        onClick={handleSearchSubmit}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" id="button-search" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
