  import './App.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min';
  import   './App.css'
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import AllNotes from './notes/AllNotes';
  function App() {

  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/allNotes" element={<AllNotes />}/>


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
