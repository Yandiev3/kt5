import {Routes, Route} from "react-router-dom";


import Home from "./pages/home/Home";
import Works from "./pages/works/Works";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            
        </Routes>
    </div>
  );
}

export default App;
