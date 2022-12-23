import "./ConstructionDisplay.css";

export default function ConstructionDisplay(){
    let text = document.lastModified;

    return(
        <div className="c-border">
            <div className="c-container">
                <span className="c-header">UNDER re-CONSTRUCTION</span>
                <span className="c-date">LAST MODIFIED ON <strong>{text}</strong></span>
                feel free to scroll
                - reworking routes
                - reworking organization/ strucutre of code
                <br/>
                <a href="https://github.com/sparklingwaterlemon/The-Great-Gig-in-the-Sky" target="_blank" rel="noreferrer">github</a>
            </div>
        </div>
    )
}