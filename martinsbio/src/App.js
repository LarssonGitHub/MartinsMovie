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
import MovieListings from "./components/MovieListings"
import SearchBar from "./components/SearchBar"
import BookingCard from "./components/BookingCard"

export default function App() {
  
const [movies, setMovies] = useState("");
const [refresh, setRefresh] = useState(false);
const [searchQuary, setSearchQuary] = useState({    
  searchQuaryText: "",
  searchQuaryDate: ""});
const [BookingObject, setBookingObject] = useState("")

useEffect(() => {
  // console.log("use effect on fetch");
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
      <Header/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/listings">
            <SearchBar searchQuary={searchQuary} setSearchQuary={setSearchQuary}/>
            <MovieListings movies={movies} setRefresh={setRefresh} searchQuary={searchQuary} setBookingObject={setBookingObject}/>
          </Route>
          <Route exact path="/booking">
          {!BookingObject ? <p>You need to pick a movie first!</p> : <BookingCard  BookingObject={BookingObject} movies={movies}/>  }
          </Route>
          <Route path="/*">
            <Redirect to="/" /> 
            {console.log("hello from app.js")}
          </Route>
        </Switch>
    </Router>

  );
}


