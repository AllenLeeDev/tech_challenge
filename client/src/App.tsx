import React from "react"
import {LandingScreen, SongDataScreen} from "./components/screens"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import "./components/styles/homePage.css"


const App = () => {
  return (
    
   <Router>
     <div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link  to="/songs">Songs</Link>
         </li>
       </ul>
       <Switch>
         <Route exact path="/">
            <LandingScreen />
         </Route>
         <Route path="/songs" component={SongDataScreen}>
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
