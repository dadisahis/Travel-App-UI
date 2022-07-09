import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import List from "./screens/List/List";
import Item from "./screens/Item/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
