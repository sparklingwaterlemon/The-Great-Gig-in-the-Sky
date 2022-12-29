import MOONIMAGES from "../../assets/MOONIMAGES/0000index";
import "./BackgroundComponent.css";

export default function BackgroundComponent(){
    return(
        <div className="m-b-container">
            <img className="m-b-image" src={MOONIMAGES[0].imgRef} alt="background"/>
        </div>
    )
}