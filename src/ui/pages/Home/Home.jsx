import { useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import TodosPokemons from '../../components/TodosPokemons/TodosPokemons';

const Home = ({ url }) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const search = query.get('search') || '';

    return (
        <div>
            <TodosPokemons url={url} search={search} />
        </div>
    );
};

export default Home;
