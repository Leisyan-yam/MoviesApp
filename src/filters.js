

function Filters ({filteredGenre}) {
    return(
    <div className="App">
    <button className="btn filter" onClick={()=> filteredGenre("Comedy")}>Comedy</button>
    <button className="btn filter" onClick={()=> filteredGenre("Thriller")}>Thriller</button>
    <button className="btn filter" onClick={()=> filteredGenre("Fantasy")}>Fantasy</button>
    <button className="btn filter" onClick={()=> filteredGenre("Action")}>Action</button>
    <button className="btn filter" onClick={()=> filteredGenre("Drama")}>Drama</button>
    </div>
    )
}
export default Filters 