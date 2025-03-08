import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import YetToImplement from "./components/YetToImplement";
import FirstPrize from "./components/FirstPrize";
import SecondPrize from "./components/SecondPrize";
import CarouselC from "./components/CarouselC";
import { useState } from 'react';
import { ShowNewGrandPageContext } from "./components/GrandPageContext";
import ThirdPrize from "./components/ThirdPrize";
import FourthPrize from "./components/FourthPrize";
import FifthPrize from "./components/FifthPrize";
import SixthPrize from "./components/SixthPrize";
import SeventhPrize from "./components/SeventhPrize";


function App() {

   const [showSecondGrandPage , setShowSecondGrandPage] = useState(false)
   const [showGrandPage2 , setShowgrandPage2] = useState(false)

// const ShowNewGrandPageContext = createContext(false);



  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          {/* <Route path="/grandprize" element={<GrandPrize />} />
          <Route path="/secondgrandprize" element={<GrandPrize2 />} />  */}

          <Route path="/firstprize" element={<FirstPrize />} />
          <Route path="/secondprize" element={<SecondPrize />} />
          <Route path="/thirdprize" element={<ThirdPrize />} />
          <Route path="/fourthprize" element={<FourthPrize />} />
          <Route path="/fifthprize" element={<FifthPrize />} />
          <Route path="/sixthprize" element={<SixthPrize />} />
          <Route path="/seventhprize" element={<SeventhPrize />} />
      

          <Route path="/*" element={<YetToImplement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
