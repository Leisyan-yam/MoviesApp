

function Movie({kinos, showText, setShowText }) {

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
     }

    return(
        <div className="App">
{kinos.map(item => {
  const {id, name, image, year, plot, rate, director, showMore} = item;



  return(
    <div key={id} className="kino">
     <h2>{name} </h2>  
     <p className="year">{year} </p> 
      <img className="Movieposter" src={image} alt="imageMovie"/>
      <p className="rating"> Rating: {rate}</p>
      <p className="director"> Director: <b> {director}</b></p>
      <p className="Plot">{showMore? plot: plot.substring(0,50) + "..." }
      <button className="showMore" onClick={() => showTextClick(item)}>{showMore ? "show less": "show more"} </button></p>
    </div>
  )
})}
        </div>
    )
}
export default Movie