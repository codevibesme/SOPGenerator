//import Adduser from "./components/Adduser";
import Home from "./components/Home";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Sopgen from "./sections/Sopgen";
function App() {
  return (
    <div className="App w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/sop' element={<Sopgen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
