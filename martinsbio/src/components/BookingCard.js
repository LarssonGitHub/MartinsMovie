import {useEffect, useState} from "react";

export default function BookingCard({BookingObject, movies}) {
    // console.log(BookingObject.movieName);
    // const [tickets,
    //     setTickets] = useState(1)

    // function filterMoviesAfterId() {}

   
    
    return (
        <section>
            {/* displayinfo goes here.. */}
    <h2>{BookingObject.movieName}</h2>
    <p>{BookingObject.runtime}</p>
        </section>

// Remember for in...For booking.. Blanatly copy teacher..
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    );
}

//