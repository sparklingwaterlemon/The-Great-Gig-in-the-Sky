import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './LoginPage.css';


function LoginPage({addUser}){
    const [newUser, setNewUser] = useState({name:""});

    const handleChange = (evt) => {
        setNewUser({...newUser, name:evt.target.value})
        // fun console.log
        console.log(evt.target.value)
    }
  
    function handleAddUser(evt){
        evt.preventDefault();
        addUser(newUser)        
        // clearing form
        setNewUser({name:""})
    }
    
    const navigate = useNavigate();

    function navigateToMovieIndex(){
        console.log("..redirecting..");
        navigate("/movies")
    }

    return (
        <>
        <div className="full-screen-container">
            <div className="login-container">
                <h3 className="login-title"> Please enter your desired username below </h3>
                <form onSubmit={handleAddUser}>
                    <div className="username-form">
                        <label> Username </label>
                        <input 
                            value={newUser.name}
                            onChange={handleChange}
                            required/>
                    </div>
                    <button className="login-button" type="submit" onClick={navigateToMovieIndex}> Sign In </button>
                </form>
            </div>
        </div>
        </>
    );
  }
  
export default LoginPage;