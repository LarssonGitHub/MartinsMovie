import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './app.css';

import Header from "./components/Header"
import Home from "./components/Home"
import Listnings from "./components/Listnings"
import SearchBar from "./components/SearchBar"


export default function App() {
  
const [movies, setMovies] = useState("");
const [refresh, setRefresh] = useState(false);
const [searchQuary, setSearchQuary] = useState({    
  searchQuaryText: "",
  searchQuaryDate: ""});

useEffect(() => {
  fetch('data.json')
  .then(resp => resp.json())
    .then(data => setMovies(data))
    .catch(err => console.log(err))

    if (refresh === true ) {
      console.log("refreshed");
      setRefresh(false)
    }
},[refresh]);

// let count = 1;
// <p>{count += 1}</p>
// <button onClick={() => console.log(count)}>check var</button>
// //TODO... This..! Ask Teacher

  return (
    // Need to make better.... async stuff...!
    <Router>
      <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/listings">
            <SearchBar searchQuary={searchQuary} setSearchQuary={setSearchQuary}/>
            <Listnings movies={movies} setRefresh={setRefresh} searchQuary={searchQuary}/>
          </Route>
          <Route path="/*">
            <Redirect to="/" /> 
            {console.log("hello from app.js")}
          </Route>
        </Switch>
    </Router>
  );
}


