
import './App.css';
import { useState } from 'react';
import { data } from './data'
import Movie from './movie';
import Filters from './filters';


function Kino() {
    const [kino, setKino]=useState( data );
    const [showText, setShowText] = useState(false);
    
  const chosenGenre  = ( genre ) => {
    const NewSet = data.filter ( element  =>  element.genre.includes( genre ));
    setKino(NewSet);
  }
    
    return (
      <div>
      <Filters filteredGenre={chosenGenre}/>
      <Movie kinos = {kino} showText={showText} setShowText= {setShowText}/>
    </div>
    );
  }
  
  export default Kino;
  