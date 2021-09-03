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

    function sortFreeSeats(seats) {
        if (!Array.isArray(seats)) {
            return "{ERROR}"
        }
        return seats
            .filter(seat => seat === 'free')
            .length
    }

    return (
        <section className="borders">
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