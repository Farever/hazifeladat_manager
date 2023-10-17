import { useRef , useState} from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";


export default function AddNewDataForm(props) {
  const tantargy = useRef();
  const datum = useRef();
  const temakor = useRef();
  const hatarido = useRef();
  const milyen = useRef();
  const leiras = useRef();

  let date = new Date().toJSON().slice(0, 10);

  const [modalIsOpen, setModalIsOpen] = useState(false);


  const [warningText, setWarningText] = useState("");


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
      milyen: milyen.current.value,
      leiras: leiras.current.value
    };
    if (tantargy.current.value === "" || datum.current.value ==="" || temakor.current.value===""|| hatarido.current.value === ""|| milyen.current.value === "") 
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
    <div>
      <form onSubmit={FormHandler}>
        <label for="tantargy">Tantárgy</label>
        <label for = "datum" >Feladás dátuma</label>
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
        <label for = "temakor" >Témakör</label>
        <label for = "hatarido" >Határidő</label>
        <br/>

        <input type="text" ref={temakor} />
        <input type="date" ref={hatarido} />

        <input type="radio" id="irasbeli" name="irasbeli" value="Írásbeli" ref={milyen} checked/>
        <label for="html">Írásbeli</label><br/>
        <input type="radio" id="szobeli" name="irasbeli" value="Szóbeli" ref={milyen}/>
        <label for="Szóbeli">Szóbeli</label><br/>
        
        <label for = "leiras" >Leírás (nem kötelező) </label>
        <input type="text" ref={leiras} />
        <br/>
        <input type="submit" value="Felvesz" onClick={submitHandler} />

        {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        {modalIsOpen && (
          <Modal warning={warningText} onClick={closeModalHandler} />
        )}

      </form>
    </div>
  );
}