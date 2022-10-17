import "./ForumPage.css";
import * as forumApiService from "../../utilities/Forum-Services/Forum-Services";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



export default function ForumPage({userInfo}){
    const [newEntry, setNewEntry] = useState({user: userInfo, title: "", text: ""})


    function handleChange(evt){
        // const data = await forumApiService.createEntry({newEntry})
        setNewEntry({...newEntry, [evt.target.name]:evt.target.value})
    }
    
    const navigate = useNavigate();

    function navigateToAbout(){
        navigate("/about")
    }

    function handlePostSubmission(evt){
        evt.preventDefault();
        forumApiService.addPostToList(newEntry);
        alert("Your message was sent!");
        navigateToAbout();
    }

    

    return (
        <>
        <div className="forum-container">
            <span className="forum-title"> SEND A MESSAGE </span>
            <span className="forum-hello"> HELLO, {userInfo.name.toUpperCase()} </span>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={handlePostSubmission}>
                        <label className="forum-label">Title</label>
                        <input className="forum-input" type="text" name="title" value={newEntry.title} onChange={handleChange} required />
                        <br />                        
                        <label className="forum-label">Text</label>
                        <input className="forum-input" type="text" name="text" value={newEntry.text} onChange={handleChange} required />
                        <br />
                        <label className="forum-label">Confirm</label>
                        <button className="forum-submit-btn" type="submit"> POST </button>
                        <br />
                        <br />
                        <button className="forum-back-btn"> <Link to="/about"> Go Back </Link> </button>
                    </form>
                </div>
        </div>
        </>
    );

}


