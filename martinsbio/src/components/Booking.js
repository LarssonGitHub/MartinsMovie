export default function Booking({children, message}) {
    return (
        <main>
        <div><b>{message}</b></div>
        <h1>Finish up your booking</h1>
       {children}
        </main>
    )
}

