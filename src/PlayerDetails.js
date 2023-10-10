import { useNavigate, useParams } from "react-router-dom";
import useFetch from './useFetch';

const PlayerDetail = () => {
    const { id } = useParams();
    const { data: player, error, isPending } = useFetch('http://localhost:8000/players/' + id);
    const history = useNavigate();

    return ( 
        <div className="player-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { player && (
                <article>
                    <h2>{ player.name }</h2>
                    <div> TOP PLAYER</div>
                </article>
            )}
        </div>
     );
}
 
export default PlayerDetail;