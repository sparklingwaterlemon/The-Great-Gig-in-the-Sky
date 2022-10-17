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
            <a href="https://www.youtube.com/watch?v=mPGv8L3a_sY" target="_blank"> Pink Floyd </a>          
            
            {user ? <span> &nbsp; | &nbsp; <Link to={"/forum"}> Send Me A Message! </Link>&nbsp; | &nbsp;</span> : false}
            {user ? <Link to={""} onClick={handleLogOut}>Logout</Link> : false}
        </nav>
    )
}
