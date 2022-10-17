import "./NavBar.css";
import {Link} from 'react-router-dom';
import * as userService from "../../utilities/Users-Services/Users-Services";


export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }


    return (
        <nav>
            <Link to="/">Home Page</Link>
            &nbsp; | &nbsp;
            <Link to="/about"> About </Link>
            &nbsp; | &nbsp;
            <Link to={"/forum"}> Send Me A Message! </Link>
            &nbsp; | &nbsp;
            <Link to={""} onClick={handleLogOut}>Logout</Link>
        </nav>
    )
}
