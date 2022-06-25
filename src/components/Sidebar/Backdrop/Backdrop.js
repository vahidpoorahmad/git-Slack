import "./Backdrop.css";
function Backdrop({ show, closeHandler }) {
  return show ? <div className="backdrop" onClick={closeHandler}></div> : null;
}

export default Backdrop;
