import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {}, []);

  const onClose = () => {
    tg.close();
  };
  return (
    <div className="App">
      WebApp
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
