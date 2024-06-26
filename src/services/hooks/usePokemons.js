import { useState, useEffect } from 'react';

const usePokemons = (url, search) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const result = await response.json();
        
        let pokemonDetails = [];
        if (search) {
          pokemonDetails = result.results.filter(pokemon =>
            pokemon.name.toLowerCase().includes(search.toLowerCase())
          ).map(pokemon => fetch(pokemon.url).then(res => res.json()));
        } else {
          pokemonDetails = result.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
        }

        const PokemonDetail = await Promise.all(pokemonDetails);
        setData(PokemonDetail);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, search]);

  return { data, loading, error };
};

export default usePokemons;
