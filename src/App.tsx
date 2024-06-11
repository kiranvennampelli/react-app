import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
//import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (

    <BrowserRouter>
      <div className='container-fluiid'>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="#">Navbar</Link>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
            </ul>
            </div>
        </nav>
        <main style={{border: "2px solid blue", height: "400px",margin:"10px"}}>
          <Routes>
            <Route path='/' element={<Message text='Hello React'/>}></Route>
            <Route path='/counter' element={<Counter initialValue={10}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>

        </main>
        </div>
      </BrowserRouter>
       
  );
}

export default App;
