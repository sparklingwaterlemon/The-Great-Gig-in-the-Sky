import "./SearchBarCSS.css";
import { useState } from "react";

export default function SearchBarComponent(){
    const [zipcode, setZipcode] = useState("");

    const handleFormInput = (evt) =>{
        console.log(evt.target.value);
        setZipcode(evt.target.value);
    }

    const handleFormSubmit = (evt) =>{
        evt.preventDefault();
        setZipcode("");
    }

    return(
        <div className="search-container">
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="enter zip only" onChange={handleFormInput} value={zipcode} required />
            </form>
        </div>
    )
}