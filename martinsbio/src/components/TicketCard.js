import { useHistory } from 'react-router'
import {useState} from "react";
import SeatingCard from "./SeatingCard"
export default function TicketCard({setMessage, bookingObject}) {

    const history = useHistory()

    let {seats} = bookingObject

    const [totalSeats,
        setTotalSeats] = useState(seats)

    const [tickets,
        setTickets] = useState(1)

    const [orderStep,
        setOrderStep] = useState(true)

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
        if (newSeats[seatingIndex] === false) {
            return setMessage("How did you do that?");
        }
        if (newSeats[seatingIndex] === true) {
            if (tickets === 0 || !tickets) {
                return setMessage("You have already booked all your tickets.. proceed to checkout");
            }
            newSeats[seatingIndex] = "booked";
            setTickets(tickets => tickets - 1)
            return setTotalSeats(newSeats)
        }
        if (newSeats[seatingIndex] === "booked") {
            newSeats[seatingIndex] = true;
            setTickets(tickets => tickets + 1)
            setTotalSeats(newSeats)
            return setMessage("");
        }
    }

    //TODO... Fix this horrible thing...
    function checkout() {
        // TODO validation.....
        if (tickets !== 0 && bookingObject.length < 1) {
            return setMessage("something went horrible wrong on our end!");
        }

        //Fix booking number
        function bookingNumber() {
            const lettersAsString = `A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9`;
            const letters = lettersAsString.split(',');
            let randStr = '';
            for (let i = 0; i < 40; i++) {
                randStr += letters[Math.floor(Math.random() * letters.length)];
            };
            return randStr;
        };

        //clean and filter all json, + so much more.... 
        let BookingNumber = bookingNumber()

        const allSeatNumbers = totalSeats
        .map((car, i) => car === 'booked' ? i : -1)
        .filter(index => index !== -1);

        alert("congrats, your booking number is" +  "\r\n" + BookingNumber + "\r\n\r\n" + "with the seat Numbers of..." + allSeatNumbers)

        history.go(0)
    }

    return (
        <section>
            {orderStep
                ? <section>
                        <h3>Number of Tickets</h3>
                        <button onClick={() => decreaseTickets()}>←</button>
                        <p>{tickets}</p>
                        <button onClick={() => incrementTickets()}>→</button>
                        <button onClick={() => setOrderStep(false)}>Next</button>
                    </section>
                : <section>
                    <h3>Choose your seat</h3>
                    <div className="seatingContainer">
                        {totalSeats.map((seating, seatingIndex) => <SeatingCard
                            key={seatingIndex}
                            seatingIndex={seatingIndex}
                            seatingValue={seating}
                            bookSeating={() => bookSeating(seatingIndex)}/>)}
                    </div>
                    <button onClick={() => setOrderStep(true)}>Back</button>
                </section>}
            {tickets === 0
                ? <button onClick={()=> checkout()}>Order the shit</button>
                : ""}
        </section>

    )
}