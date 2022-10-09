import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar({username}){
  return (
    <>
      <br />
      <div className="nav-holder">
      <nav>
          <Link to="/movies"> Movie Index Page </Link>
          <Link to="/actors"> Actor Index Page </Link>
          <span className="username-header">Welcome, {username.toUpperCase()}</span>
      </nav>
      </div>
    </>
  )
}

export default NavBar