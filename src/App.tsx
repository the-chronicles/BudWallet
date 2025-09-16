import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
