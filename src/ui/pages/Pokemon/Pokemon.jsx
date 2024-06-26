import { Link, useParams } from "react-router-dom"
import styles from "./Pokemon.module.css"
import useFetchSingle from "../../../services/hooks/useFetchSingle";
import { PokemonDetail } from "../../components/PokemonDetail/PokemonDetail";
export const Pokemon = () => {
    const { id } = useParams();

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const {data, error, loading} = useFetchSingle(url);
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if(loading){
        return <div>Carregando...</div>
    }
    if(!data){
        return <div>Não tem nenhum dado</div> 
    }

    return (
        <div>
            <PokemonDetail pokemon={data} key={data.id}/>
        </div>
    )
}