export default function PopupBox({message,setMessage}) {
    return (
        message === "" ? "" : <div className="popupBox">{message}<span onClick={() => setMessage("")}>X</span></div>
    )
}
