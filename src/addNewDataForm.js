import { useRef } from "react";

export default function addNewDataForm(props){
    const tantargy= useRef();
    const temakor= useRef();
    const feladas= useRef();
    const hatarido= useRef();
    const leiras = useRef();
    const milyen= useRef();

    function FormHandler(e){
        e.preventDefault();
    }

    function submitHandler(){
        const actualData = {
            id: Math.random(),
            tantargy: tantargy.current.value,
            temakor: temakor.current.value,
            feladas: feladas.current.value,
            hatarido: hatarido.current.value,
            leiras: leiras.current.value,
            milyen: milyen.current.value,
        };
        props.OnSaveHandler(actualData);
    }

    return(
        <div>
            <form onSubmit={FormHandler}>
            <label for="tantarg">Tantárgy</label>
            
            <br/>
            <select name="tantar" id="tantar" ref={tantargy}>
                <option value="Magyar nyelv és irodalom">Magyar nyelv és irodalom</option>
                <option value="Idegen nyelv">Idegen nyelv</option>
                <option value="Matematika">Matematika</option>
                <option value="Történelem">Történelem</option>
                <option value="Testnevelés és sport">Testnevelés és sport</option>
                <option value="Természettudomány">Természettudomány</option>
                <option value="Szakmai tárgy">Szakmai tárgy</option>
            </select>
            <br/>
            <label for="temak">Témakor</label>
            <input type="text" ref={temakor} />
            <br/>
            <label for="felad">Feladás napja</label>
            <input type="date" ref={feladas} />
            <br/>
            <label for="hatar">Határidő dátuma</label>
            <input type="date" ref={hatarido} />
            <br/>
            <label for="leir">Feladat bővebb leírása</label>
            <input type="text" ref={leiras} />

            <input type="date" ref={datum} />

            </form>

        </div>
    );

}