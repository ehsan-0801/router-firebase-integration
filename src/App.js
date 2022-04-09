
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }>Home</Route>
        <Route path="/home" element={ <Home></Home> }>Home</Route>
        <Route path="/register" element={ <Register /> }>Home</Route>
        <Route path="/login" element={ <Login></Login> }>Login</Route>
      </Routes>
    </div>
  );
}

export default App;
