import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderBreadcumb from "./components/Breadcumb";
import Footer from "./components/Footer";

import {
  GsapFrom,
  Symbolic,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapFromTo,
  Home,
} from "./pages";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router basename={"/new"}>
        <Header />
        <HeaderBreadcumb/>
        <Routes>
          <Route path="/symbolic" element={<Symbolic />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
