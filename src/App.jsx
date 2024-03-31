import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderBreadcumb from "./components/Breadcumb";
import Footer from "./components/Footer";

import {
  Actual,
  Symbolic,
  About,
  Validate,
  MoreOrLess,
  Evaluate,
  Home,
  Discover,
} from "./pages";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router basename={"/"}>
        <Header />
        <HeaderBreadcumb />
        <Routes>
          <Route path="/symbolic" element={<Symbolic />} />
          <Route path="/actual" element={<Actual />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/evaluate" element={<Evaluate />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/about" element={<About />} />
          <Route path="/moreorless" element={<MoreOrLess />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
