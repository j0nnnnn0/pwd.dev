import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

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
      </Router>
    </div>
  );
};

export default App;
