import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import CategoryList from "./components/CategoryList/CategoryList";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<CategoryList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
