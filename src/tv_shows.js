import { useState } from "react"
import { dataTV } from "./data_tv_show"
import Filters from "./filters";








function Series(){
    const [series, setSeries] = useState(dataTV)
    const [showText, setShowText] = useState(false);
    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)}

        const chosenGenre  = ( genre ) => {
            const NewSet = dataTV.filter ( element  =>  element.genre.includes( genre ));
            setSeries(NewSet);
            }


        return(
        <div>
        <Filters filteredGenre={chosenGenre}/>    
        <div className="App">
        {series.map(item => {
        const {id, name, image, year, plot, rate, director, number_of_seasons, showMore} = item;
        return(
            <div key={id} className="kino">
        <h2 >{name} </h2>  
        <p className="year">{year} </p> 
        <img className="TVposter" src={image} alt="imageMovie" />
        <p className="rating"> Rating: {rate}</p>
        <p className="director"> Director: <b> {director} </b></p>
        <p className="number"> Number of seasons: <b>{number_of_seasons}</b></p>
        <p className="Plot">{showMore? plot: plot.substring(0,50) + "..." }
        <button className="showMore" onClick={() => showTextClick(item)}>{showMore ? "show less": "show more"} </button></p>
        </div>
        )
        })}
    
        </div>
        </div>
        )
        }


export default Series