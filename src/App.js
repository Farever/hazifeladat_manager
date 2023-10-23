
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs';
import Calendar from './components/Calendar';

import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
      const list = [];
      for (const key in dataList) {
        const aData = {
          id: key,
          ...dataList[key]
        };
        list.push(aData);
      }
      list.sort((a,b) =>  new Date(a.hatarido).getTime() - new Date(b.hatarido).getTime());
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
    <>
      {/*Az egész útvonaldefiniálás beletesszük a BrowseRouter beépíett kokponensbe*/}
      <BrowserRouter>
        {/*Útválasztóinkat a Routes-ban definiáljuk child tagekkét*/}
        <Routes>
          {/*A path segítségével állítjuk be, hogy milyen útvonalon jelenjen meg a komponsens. Figyeljék meg, hogy a / elemmel ellátott Route-ban van az többi, ami azt jelenti, hogy össze vannak kapcsolva. A /-rel ellátott komkponens mindig meg fog jelenni, és hozzá csatlakozik a többi, pl /contact, megjeleníti a kontaktot komponenst és a Layout komponenst is. AZ index az alapértelmezett megjelenésre szolgál a * pedig a nem létező útvonalakra készített komponenst jeleníti meg. */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home OnSaveHandler={saveData} data={datas} />} />
            <Route path="calendar" element={<Calendar data = {datas}/>} />
            <Route path="aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
