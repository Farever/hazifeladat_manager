
import './App.css';
import Feltolt from "./components/feltolt"
import { useState, useEffect, useCallback } from "react";

function App() {
  const [datas, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newData, setNewData] = useState("");

  function saveData(ujAdatok) {
    fetch(
      "https://react-test-e956d-default-rtdb.europe-west1.firebasedatabase.app/nyaral.json",
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

  const megye = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-test-e956d-default-rtdb.europe-west1.firebasedatabase.app/nyaral.json"
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
    setTimeout(() => megye(), 0);
  }, [megye, newData]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div className="App">
    <Feltolt/>
    </div>
  );
}

export default App;
