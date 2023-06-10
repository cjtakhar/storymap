import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dash from './components/dash';
import NavBar from './components/navbar';
import Login from './components/login';
import CreateAccount from './components/createAccount';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/storymap" element={<Dash />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
