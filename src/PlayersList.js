import { Link } from 'react-router-dom';

const PlayersList = ({ players }) => {
    return ( 
        <div className="players-list">
            {players.map(player => (
                <div className="players-list" key={player.id} >
                    <Link to={`/players/${player.id}`}>
                        <h2>{ player.name }</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PlayersList;