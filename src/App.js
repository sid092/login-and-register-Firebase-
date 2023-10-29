import './App.css';
import Homepage from './components/homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
