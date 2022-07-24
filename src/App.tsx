import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./features/Auth/Login";
import {Route, Routes} from "react-router-dom";
import {ProfilePage} from "./features/Profile/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
