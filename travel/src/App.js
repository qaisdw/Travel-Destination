import HomeFun from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import TourDital from "./components/TourDetails/TourDetails";
const travelData = require("./data/db.json")

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeFun data={travelData}/>} />
      <Route path="/city/:id" element={<TourDital data={travelData}/>} />
    </Routes>
    </>
  );
}

export default App;
