import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
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

// using Layout to ensure Header isnt't re-rendered when nagivating between pages
const App = () => {
  const Layout = () => {
    return (
      <div>
        <Header />
        <HeaderBreadcumb />
        <Outlet />
        <Footer />
      </div>
    );
  };
  return (
    <div className="bg-black min-h-screen w-full">
      <Router basename={"/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/symbolic" element={<Symbolic />} />
            <Route path="/actual" element={<Actual />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/evaluate" element={<Evaluate />} />
            <Route path="/validate" element={<Validate />} />
            <Route path="/about" element={<About />} />
            <Route path="/moreorless" element={<MoreOrLess />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
