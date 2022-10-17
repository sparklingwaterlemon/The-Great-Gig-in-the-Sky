import "./AboutPage.css"
import NavBar from "../../components/NavBar/NavBar"
import AuthPage from "../AuthPage/AuthPage"

export default function AboutPage({user, setUser}){
    return(
        <>
            <NavBar user={user}/>
            {user ? 
            <div className="about-page-container">
               •••about  ••••• 
            </div>
            :
            <AuthPage user={user} setUser={setUser}/>}
        </>
    )
}