import useFetch from "./useFetch";
import PlayersList from "./PlayersList";

const Players = () => {
  const { error, isPending, data: players } = useFetch('http://localhost:8000/players')

  return (
    <div className="players">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { players && <PlayersList players={players} /> }
    </div>
  );
}
 
export default Players;