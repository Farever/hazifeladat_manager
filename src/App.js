
import './App.css';
import Calendar from "./components/Calendar";

function App() {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEvents = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-test-b204e-default-rtdb.europe-west1.firebasedatabase.app/events.json"
      );
      if (!response.ok) {
        throw new Error("Valami nem jó");
      }

      const dataList = await response.json();

      const list = [];
      for (const key in dataList) {
        const locData = {
          id: key,
          ...dataList[key]
        };
        list.push(locData);
      }
      setData(list);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  });

  useEffect(() => {
    setTimeout(() => getEvents(), 500);
  }, [getEvents, Data]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
