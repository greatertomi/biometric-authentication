import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
