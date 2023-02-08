import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/favorites" exact element={<HomePage />} />
      <Route path="/new-meetup" exact element={<HomePage />} />
    </Routes>
  );
}

export default App;
