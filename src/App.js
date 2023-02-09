import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import ShowAstronomiesPage from "./pages/ShowAstronomiesPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/favourites" exact element={<FavoritesPage />} />
      <Route path="/all-astronomy" exact element={<ShowAstronomiesPage />} />
    </Routes>
  );
}

export default App;
