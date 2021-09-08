import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Search from "./components/Search";
import Booking from './components/Booking'
import './app.css';
import MovieCard from "./components/MovieCard";

export default function App() {

    const [fetchedMovies,
        setfetchedMovies] = useState("");
    const [timeStamp,
        setTimeStamp] = useState({date: null, time: null})

    const [bookingObject,
        setBookingObject] = useState()

    useEffect(() => {
        // console.log("use effect on fetch");
        fetch('data.json')
            .then(resp => resp.json())
            .then(data => setfetchedMovies(data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log("date time use effect");
        // let date = new Date() var time = date.getHours() + ":" + date.getMinutes();
        // setTimeStamp({     date: date.toLocaleDateString(),     time: time   });

        setTimeStamp({date: "2021-09-03", time: "14:30"});

    }, [])

    return (
        <Router>
            <Header/> 
            <Switch>
                <Route exact path="/">
                    <Home
                        fetchedMovies={fetchedMovies}
                        timeStamp={timeStamp}
                        setBookingObject={setBookingObject}/>
                </Route>
                <Route exact path="/search">
                    <Search
                        fetchedMovies={fetchedMovies}
                        timeStamp={timeStamp}
                        setBookingObject={setBookingObject}/>
                </Route>
                <Route exact path="/booking">
                    <Booking bookingObject={bookingObject}/>
                </Route>
                <Route component={NoMatchPage}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};