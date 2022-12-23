import "./AboutButton.css";
import { Link } from "react-router-dom";

export default function AboutButton(){
    return(
        <button className="about-button">
            <Link to="/testchildone" className="about-link"> 
            <span className="letter-0">&nbsp;</span>
            <span className="letter-00">&nbsp;</span>
            <span className="letter-a">&nbsp;A</span>
            <span className="letter-b">B</span>
            <span className="letter-o">O</span>
            <span className="letter-u">U</span>
            <span className="letter-t">T&nbsp;&nbsp;</span>
            <span className="letter-99">&nbsp;</span>
            <span className="letter-9">&nbsp;</span>
            </Link>
        </button>
  );
}