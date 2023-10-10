import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Tournament of Power</h1>
      <div className="links">
        <Link to="/" >Home</Link>
        <Link to="/timeline" >Timeline</Link>
        <Link to="/players" >Players</Link>
        <Link to="/watch" >Watch</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;