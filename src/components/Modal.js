import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <p>{props.warning}</p>
      <button className="btn" onClick={props.onClick}>
        OK
      </button>
    </div>
  );
};

export default Modal;
