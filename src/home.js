import { useState } from "react"
import { data } from "./data"


function Home(){

const [film, setFilm] = useState(0);
const { name, image} = data[film];
const previousPoster =() =>{
    setFilm((film =>{
        film--;
        if(film < 0){film = data.length-1}
        return film;
    }))
}

const nextPoster = () =>{
    setFilm((film =>{
        film++;
        if(film > data.length-1){film = 0}
        return film;
    }))
}

return(
    <div className="content">
    <div className="quote">
    <h1>Movies AND tv SHOWS are a fantastic source of entertainment</h1>
    <h3>They definitely add some spice to life and are great antidepressants: just pick the right film to watch when you’re in a bad mood, it can save your day!</h3>
    </div>
<div className="wrapper">
    <button onClick={previousPoster}><img src="https://img.icons8.com/offices/30/000000/back.png" alt="previcon"/></button>
      <div className="carousel">
        <img className="poster" src={image} alt="films" />
        <p className="name"> {name} </p>
    </div>
    <button onClick={nextPoster}><img src="https://img.icons8.com/office/30/000000/forward--v1.png" alt="nexticon"/></button>
</div>
    </div>
)
}
export default Home