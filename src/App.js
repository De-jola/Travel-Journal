import "./style.css";
import Navbar from "./Components/Navbar";
import Journal from "./Components/Journal";
import data from "./data";

function App() {
  const journals = data.map((item) => {
    return <Journal key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section>{journals}</section>
    </div>
  );
}

export default App;
