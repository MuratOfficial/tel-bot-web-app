import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import CategoryList from "./components/CategoryList/CategoryList";
import ErrorPage from "./ErrorPage";
import CategoryLayout from "./components/Layouts/CategoryLayout";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<CategoryList />} errorElement={<ErrorPage />} />
        <Route path="categories">
          <Route path=":categoryId" element={<CategoryLayout />} />
        </Route>

        <Route path="cabinet" element />
      </Routes>
    </div>
  );
}

export default App;
