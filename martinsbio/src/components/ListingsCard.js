export default function ListingsCard({date, time, seats, movieName, runtime, img}) {
           return (
            <section className="borders">
                <h4>{movieName}</h4>
                {img ? <img src={img} alt={movieName} width="200"></img> : <img src={'./assets/no_image.jpeg'} alt={movieName} width="200"></img>}
                <p>Playing: {date} </p>
                <p>Starts: {time}</p>
                <p>Seats left: {seats}</p>
                <p>Runtime: {runtime}</p>
            </section>
           )
 }