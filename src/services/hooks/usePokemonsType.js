import { useState, useEffect } from 'react';

const usePokemonsType = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        const pokemon = result.pokemon.map(pokemon => fetch(pokemon.pokemon.url).then(res => res.json()));
        const PokemonDetail = await Promise.all(pokemon)
        console.log(PokemonDetail)
        setData(PokemonDetail);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default usePokemonsType;
