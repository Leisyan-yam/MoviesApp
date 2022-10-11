import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import Kino from "./kino";
import Series from "./tv_shows";


function App(){
  return(
  <Router>
<nav>
<Link className="link" to="/"> Home</Link>
<Link className="link" to="/movies"> Movies</Link>
<Link className="link" to="/series"> TV Shows </Link>
</nav>

<Routes>
  <Route path="/" element  ={<Home/>} />
  <Route path="/movies" element  ={<Kino/>} />
  <Route path="/series" element = {<Series/>}/>

</Routes>
  </Router>
)
}

export default App