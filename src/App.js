
import './App.css';
import AddNewDataForm from "./components/AddNewDataForm"
import DataList from "./components/DataList"
import { useState, useEffect, useCallback } from "react";
import Calendar from './components/Calendar';

function App() {
  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState("");

  function saveData(ujAdatok) {
    fetch(
      "https://react-test-b204e-default-rtdb.europe-west1.firebasedatabase.app/events.json",
      {
        method: "POST",
        body: JSON.stringify(ujAdatok),
        headers: { "Content-Type": "application/json" }
      }
    );
    setData((prevData) => {
      return [ujAdatok, ...prevData];
    });
  }

  const getEvents = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-test-b204e-default-rtdb.europe-west1.firebasedatabase.app/events.json"
      );
      if (!response.ok) {
        throw new Error("Valami baj van");
      }
      const dataList = await response.json();
      console.log(dataList);
      const list = [];
      for (const key in dataList) {
        const aData = {
          id: key,
          ...dataList[key]
        };
        list.push(aData);
      }
      setData(list);
      console.log(datas);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  }, []);
  useEffect(() => {
    setTimeout(() => getEvents(), 0);
  }, [getEvents, newData]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div className="App">
    <AddNewDataForm OnSaveHandler={saveData}/>
    <DataList data={datas} />
    <Calendar data = {datas} />
    </div>
  );
}

export default App;
