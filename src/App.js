import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/product" exact element={<Product />} />
          <Route path="/analytics" exact element={<Analytics />} />
          <Route path="/settings" exact element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
