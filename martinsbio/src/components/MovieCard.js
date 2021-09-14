import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export default function MovieCard({movieObject, timeStamp, setBookingObject, setMessage}) {

    const history = useHistory();

    const {date, time, seats, movieName, img} = movieObject

    const [totalSeats,
        setTotalSeats] = useState(false)

    useEffect(() => {
        console.log("use effect seat ran");
        if (!Array.isArray(seats)) {
            return setTotalSeats(false)
        }
        const countSeats = seats
            .filter(seat => seat === true)
            .length
        if (countSeats <= 0) {
            return setTotalSeats(false)
            //Add disable so user can't book here...
        }
        setTotalSeats(countSeats)
    }, [seats])

    function redriectToBooking() {
        if (totalSeats === 0 || !totalSeats) {
            setMessage("No seats dear..");
            return;
        }
        if (date < timeStamp.date) {
            setMessage("Movie is already over");
            return;
        }
        setBookingObject(movieObject);

        history.push("/booking");
    }

    return (

        <section className="borders" onClick={() => redriectToBooking()}>
            {date < timeStamp.date || totalSeats <= 0 || !totalSeats
                ? <div className="greyedOut"></div>
                : ""}
            {img
                ? <img src={img} alt={movieName} width="200"></img>
                : <img src={'./assets/no_image.jpeg'} alt={movieName} width="200"></img>}
            <h4>{movieName}</h4>
            <p>Playing: {date}
            </p>
            <p>Starts: {time}</p>
            {totalSeats
                ? <p>Seats left: {totalSeats}</p>
                : <p>Fully booked</p>
}

        </section>
    )
}

// https://www.pluralsight.com/guides/applying-classes-conditionally-react