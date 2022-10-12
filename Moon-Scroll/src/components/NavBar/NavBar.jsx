
import {Link} from 'react-router-dom';
import * as userService from "../../utilities/Users-Services/Users-Services";


export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }



    return (
        <nav>
            
            <Link to="/search">Search Weather</Link>
            &nbsp; | &nbsp;
            <Link to="/journal">Journal</Link>
            &nbsp; | &nbsp;
            <Link to="/moon">Moon Landing</Link>
            &nbsp; | &nbsp;
            <br />
            <br />
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
            <br />
            <br />
        </nav>
    )
}
