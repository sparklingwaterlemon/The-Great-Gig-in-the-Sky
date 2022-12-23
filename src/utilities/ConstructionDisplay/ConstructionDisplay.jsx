import "./ConstructionDisplay.css";

export default function ConstructionDisplay(){
    let text = document.lastModified;

    return(
        <div className="c-border">
            <div className="c-container">
                <span className="c-header">UNDER CONSTRUCTION</span>
                <span className="c-date">LAST MODIFIED ON <strong>{text}</strong></span>
                feel free to scroll
            </div>
        </div>
    )
}