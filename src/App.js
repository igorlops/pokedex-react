import React from 'react';
import Home from './ui/pages/Home/Home';
import styles from './App.module.css'
import { Header } from './ui/components/Header/Header';
import { MenuLateral } from './ui/components/MenuLateral/MenuLateral';
import { Link, Route, Routes } from 'react-router-dom';
import { Pokemon } from './ui/pages/Pokemon/Pokemon';
import { Specie } from './ui/pages/Species/Specie';

const App = () => {

  return (
    <div>
      <Header/>
      <div className={styles['conteudo-pokedex']}>
        <div className={styles['menu-lateral']}>
          <MenuLateral/>
        </div>
        <div className={styles['home']}>
          <Routes>
            <Route path="/" element={<Home url={'https://pokeapi.co/api/v2/pokemon?'}/>} />
            <Route path="/species/:id" element={<Specie/>} />
            <Route path="/pokemons/:id" element={<Pokemon/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

