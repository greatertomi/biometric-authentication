import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
