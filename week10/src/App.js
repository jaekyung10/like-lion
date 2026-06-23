import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Blogpage from "./components/Blogpage";
import Categorypage from "./components/Categorypage";
import Productpage from "./components/Productpage";
import Checkoutpage from "./components/Checkoutpage";
import Searchpage from "./components/Searchpage";
import Contactpage from "./components/Contactpage";
import Ourstorypage from "./components/Ourstorypage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/category" element={<Categorypage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/ourstory" element={<Ourstorypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;