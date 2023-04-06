import HomeFun from "./components/home/Home";
const travelData = require("./data/db.json")

function App() {
  return (
    <>
    <HomeFun data={travelData}/>
    </>
  );
}

export default App;
