import {useState} from "react";

export default function BookingCard({bookingObject}) {
 console.log(bookingObject);
 const [tickets,
    setTickets] = useState(1)
const [message,
    setMessage] = useState("")

console.log(bookingObject);
let {seats, movieName} = bookingObject

const [totalSeats,
    setTotalSeats] = useState(seats)

function sortFreeSeats() {
    let countSeats = totalSeats
        .filter(seat => seat === true)
        .length

    if (countSeats === 0) {
        return "No free seats"
        //Add disable so user can't book here...
    }

    return countSeats;
}

//felhantering if error på message om error är false
function incrementTickets() {
    setMessage("")
    if (tickets >= sortFreeSeats()) {
        setMessage("Can't order more than tuckets than there are free seats")
        return;
    }
    setTickets(tickets => tickets += 1)
}

function decreaseTickets() {
    setMessage("")
    if (tickets <= 1) {
        setMessage("You must at least order 1 ticket")
        return;
    }
    setTickets(tickets => tickets -= 1)
}

const bookSeating = (seatingIndex) => {
    const newSeats = [...totalSeats];
    if (newSeats[seatingIndex] === true) {
        if (tickets === 0 || !tickets) {
            return setMessage("You have already booked all your tickets.. proceed to checkout");
        }
        newSeats[seatingIndex] = "tempBooked";
        setTickets(tickets => tickets - 1)
        return setTotalSeats(newSeats)
    }
    if (newSeats[seatingIndex] === "tempBooked") {
        newSeats[seatingIndex] = true;
        setTickets(tickets => tickets + 1)
        setTotalSeats(newSeats)
        return setMessage("");
    }

}

function checkout() {
    if (tickets >= 1) {
        return setMessage("Hey man, use up your tickets first!");
    }
    alert("you made it, you booked it...")
}

return (
    <main>
        <h1>Make your booking</h1>
        <section>
            <h2>{movieName}</h2>
            <p>{message}</p>
        </section>
        <section>
            <h3>Number of Tickets</h3>
            <button onClick={() => decreaseTickets()}>←</button>
            <p>{tickets}</p>
            <button onClick={() => incrementTickets()}>→</button>
            <button
                onClick={() => {
                alert("should go to next! now this disapier and user picks seats...")
            }}>Pick a seat</button>
        </section>
        <section>
            <h3>Pick seat</h3>
            {console.log(totalSeats)}
            <div className="seat-list">
                {totalSeats.map((seating, seatingIndex) => <Seating
                    key={seatingIndex}
                    seatingIndex={seatingIndex}
                    seatingValue={seating}
                    bookSeating={() => bookSeating(seatingIndex)}/>)}
            </div>
        </section>
        <button onClick={()=> checkout()} >CHECKOUT</button>
    </main>
);
}

function Seating({seatingIndex, seatingValue, bookSeating}) {
return (
    <span>
        <b>{seatingIndex}</b>
        {seatingValue === false
            ? <span>Book_</span>
            : <span onClick={bookSeating}>Free_</span>}
    </span>
)
}

