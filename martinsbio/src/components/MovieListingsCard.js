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
        alert("user should decide yes or no if they want to book this!")
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

