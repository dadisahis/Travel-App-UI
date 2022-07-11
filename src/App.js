import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import List from "./screens/List/List";
import SingleItem from "./screens/SingleItem/SingleItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
