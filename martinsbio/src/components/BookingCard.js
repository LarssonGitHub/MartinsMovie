export default function BookingCard({children, bookingObject}) {

    const {movieName,
        img} = bookingObject;

    return (
        <section>
             <h2>{movieName}</h2>
            {img ?
            <img src={img} alt={movieName} width="200"></img>
            :
            <img src={'./assets/no_image.jpeg'} alt={movieName} width="200"></img>}
            {children}
        </section>
    )}