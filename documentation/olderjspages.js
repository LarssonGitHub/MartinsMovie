import {useEffect, useState} from "react";

export default function BookingCard({BookingObject, movies}) {
    const [tickets,
        setTickets] = useState(1)
        const [totalSeats,
            setTotalSeats] = useState()

    console.log(BookingObject);
    let {
        date,
        time,
        seats,
        movieName,
        runtime,
        img,
        setBookingObject,
        movieJsonObject
    } = BookingObject

    function sortFreeSeats(seats) {
    seats.filter(seat => seat === true).length

        if (countSeats === 0) {
            return "No free seats"
            //Add disable so user can't book here...
        }

        return countSeats;
    }

    //felhantering if error på message om error är false
    function incrementTickets() {
        console.log("removed")
        if (tickets >= sortFreeSeats(seats)) {
            console.log("Can't order more than tuckets than there are free seats")
            return;
        }
        setTickets(tickets => tickets += 1)
    }

    function decreaseTickets() {
        console.log("removed")
        if (tickets <= 1) {
            console.log("You must at least order 1 ticket")
            return;
        }
        setTickets(tickets => tickets -= 1)
    }
    return (

        <main>
            <h1>Make your booking</h1>
            <section>
                <h2>{movieName}</h2>
                <p>{runtime}</p>
            </section>
            <section>
                <h3>Number of Tickets</h3>
                <button onClick={() => decreaseTickets()}>←</button>
                <p>{tickets}</p>
                <button onClick={() => incrementTickets()}>→</button>
            </section>
            <section>
                <h3>Pick seat</h3>
                
            </section>
        </main>

    // Remember for in...For booking.. Blanatly copy teacher..
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/
    // f or...in
    );
}

//









import {useHistory} from "react-router-dom";

export default function ListingsCard({
    date,
    time,
    seats,
    movieName,
    runtime,
    img,
    setBookingObject,
    movieJsonObject
}) {

    const history = useHistory();

    function redirectAndBook() {
        setBookingObject(movieJsonObject)
        history.push("/booking");
    }

    //Put this into a state?
    function sortFreeSeats(seats) {

        if (!Array.isArray(seats)) {
            return "{ERROR}"
        }

        const countSeats = seats.filter(seat => seat === true).length

        if (countSeats === 0) {
            return "No free seats"
            //Add disable so user can't book here...
        }

        return countSeats;
    }

    return (
        <section className="borders">
            <section></section>
            <h4>{movieName}</h4>
            {img
                ? <img src={img} alt={movieName} width="200"></img>
                : <img src={'./assets/no_image.jpeg'} alt={movieName} width="200"></img>}
            <p>Playing: {date}
            </p>
            <p>Starts: {time}</p>
            <p>Seats left: {sortFreeSeats(seats)}</p>
            <p>Runtime: {runtime}</p>
            <button onClick={() => {
                redirectAndBook()
            }}>Book seats now!</button>
        </section>
    )
}
















import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export default function TicketCard({totalSeats}) {
  

   const history = useHistory();

   function redirectAndBook() {
       setBookingObject(movieJsonObject)
       history.push("/booking");
   }


    //felhantering if error på message om error är false
    function incrementTickets() {
        console.log("removed")
        if (tickets >= totalSeats) {
            console.log("Can't order more than tuckets than there are free seats")
            return;
        }
        setTickets(tickets => tickets += 1)
    }

    function decreaseTickets() {
        console.log("removed")
        if (tickets <= 1) {
            console.log("You must at least order 1 ticket")
            return;
        }
        setTickets(tickets => tickets -= 1)
    }

    return (
        <section>
               <h3>Number of Tickets</h3>
                <button onClick={() => decreaseTickets()}>←</button>
                <p>{tickets}</p>
                <button onClick={() => incrementTickets()}>→</button>
                <button onClick={() => {
                redirectAndBook()
            }}>Book seats now!</button>
        </section>
    );
}

