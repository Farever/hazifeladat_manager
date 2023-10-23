import classes from "./AddNewDataForm.module.css"
import { useRef , useState} from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";


export default function AddNewDataForm(props) {
  const [milyen, setMilyen] = useState();
  const tantargy = useRef();
  const datum = useRef();
  const temakor = useRef();
  const hatarido = useRef();
  //const milyen = useRef();
  const leiras = useRef();

  //let date = new Date().toJSON().slice(0, 10);

  const [modalIsOpen, setModalIsOpen] = useState(false);


  const [warningText, setWarningText] = useState("");

  const handleClick = radio => event => setMilyen(radio);
  
  function FormHandler(e) {
    e.preventDefault();
  }

  function submitHandler() {
    const actualData = {
      id: Math.random(),
      tantargy: tantargy.current.value,
      datum: datum.current.value,
      temakor: temakor.current.value,
      hatarido: hatarido.current.value,
      milyen: milyen,
      leiras: leiras.current.value,
      done : false
    };
    if (tantargy.current.value === "" || datum.current.value ==="" || temakor.current.value===""|| hatarido.current.value === ""|| milyen === "") 
    {
      setWarningText("Töltse ki a kötelező mezőket!");
      setModalIsOpen(true);
    }
    else{
    props.OnSaveHandler(actualData);
    }
  }
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={classes.cardBg}>
      <h1 className={classes.cardHeader}>Új házifeladat</h1>
      <form onSubmit={FormHandler}>
        <label for="tantargy" className={classes.cardText}>Tantárgy </label>
        <label for = "datum" className={classes.cardText} >Feladás dátuma </label>
        <br/>
        <select name="tantargy" id="tantargy" ref={tantargy}>
          <option value="Matematika">Matematika</option>
          <option value="Idegen nyelv">Idegen nyelv</option>
          <option value="Magyar nyelvtan és Irodalom">Magyar nyelvtan és Irodalom</option>
          <option value="Történelem">Történelem</option>
          <option value="Természettudományok">Természettudományok</option>
          <option value="Testnevelés">Testnevelés</option>
          <option value="Szakmai">Szakmai</option>
        </select>
        
        <input type="date" ref={datum} />

        <br/>
        <label for = "temakor" className={classes.cardText}>Témakör</label>
        <label for = "hatarido" className={classes.cardText}>Határidő</label>
        <br/>
        <input type="text" ref={temakor} />
        <input type="date" ref={hatarido} />

        <label for = "leiras" className={classes.cardText} id={classes.desc} >Leírás (nem kötelező) </label>
        <input type="textarea" rows={"4"} cols={"40"} ref={leiras} id={classes.desc} />
        <br/>
        <input type="radio" id="irasbeli" name="milyen" value="Írásbeli" onClick={handleClick("Írásbeli")}/>
        <label for="html">Írásbeli</label>
        <input type="radio" id="szobeli" name="milyen" value="Szóbeli" onClick={handleClick("Szóbeli")}/>
        <label for="Szóbeli">Szóbeli</label>
        

        <br/>
        <input type="submit" className={classes.cardBtn} value="Felvesz" onClick={submitHandler} />

        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        {modalIsOpen && (
          <Modal warning={warningText} onClick={closeModalHandler} />
        )}

      </form>
    </div>
  );
}