import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import YetToImplement from "./components/YetToImplement";
import React, { Suspense } from "react";

const Prize1 = React.lazy(() => import("./components/FirstPrize"));
const Prize2 = React.lazy(() => import("./components/SecondPrize"));

const Prize3 = React.lazy(() => import("./components/ThirdPrize"));
const Prize4 = React.lazy(() => import("./components/FourthPrize"));

const Prize5 = React.lazy(() => import("./components/FifthPrize"));
const Prize6 = React.lazy(() => import("./components/SixthPrize"));

const Prize7 = React.lazy(() => import("./components/SeventhPrize"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />} />
            {/* <Route path="/grandprize" element={<GrandPrize />} />
          <Route path="/secondgrandprize" element={<GrandPrize2 />} />  */}

            <Route path="/firstprize" element={<Prize1 />} />
            <Route path="/secondprize" element={<Prize2 />} />
            <Route path="/thirdprize" element={<Prize3 />} />
            <Route path="/fourthprize" element={<Prize4 />} />
            <Route path="/fifthprize" element={<Prize5 />} />
            <Route path="/sixthprize" element={<Prize6 />} />
            <Route path="/seventhprize" element={<Prize7 />} />

            <Route path="/*" element={<YetToImplement />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
