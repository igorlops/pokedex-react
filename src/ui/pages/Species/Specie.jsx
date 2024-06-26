import { Link, useParams } from "react-router-dom"
import styles from './Specie.module.css'
import usePokemonsType from "../../../services/hooks/usePokemonsType";
import CardPokemon from "../../components/CardPokemon/CardPokemon";

export const Specie = () => {
    const {id} = useParams();
    const url = `https://pokeapi.co/api/v2/type/${id}`;
    const {data, error, loading} = usePokemonsType(url);
    
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
            <div className={styles["container"]}>
                <div className={styles["area-pokemons"]}>
                    <CardPokemon data={data}/>
                <div style={{"display":'flex', "justifyContent":'center'}}>
                    {
                    loading && 
                    <div className='spin'>Carregando...</div>
                    }
                </div>
                </div>
            </div>
        </div>
    )
}