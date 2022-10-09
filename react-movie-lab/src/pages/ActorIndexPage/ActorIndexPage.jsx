import "./ActorIndexPage.css";
import NavBar from "../../components/NavBar/NavBar";


function ActorIndexPage({username, movies}){
    const actorList = new Set();

    // woah - forEach works? should we stick to map?
    // let's goooo -- nested forEach'es
    let howManyActors = 0;

    movies.forEach((movie)=>{
        movie.cast.forEach((cast)=>{
            actorList.add(cast)
        })
    })




    // let value_string = "";
    // let forEachOfActors = actorList.forEach(function(value){
    //     value_string = value;
    //     console.log(value_string)
    //     return(
    //         <h3> {value_string} </h3>
    //     )
    // })
    // interesting - unable to pass a forEach function to render
    // how to map a set? with google found the Array.from() method - below

    // Array.from() method... interesting
    let forEachOfActors2 = Array.from(actorList).map((element)=>{
        return(
            <p> {element} </p>
        )
    })



    
    return (
        <>
        <NavBar username={username} />
        {forEachOfActors2}
        </>
    );
  }
  
export default ActorIndexPage;