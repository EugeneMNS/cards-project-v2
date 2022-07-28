import React from 'react';
import './App.css';
import Header from "./features/Header/Header";
import {RoutesConst} from "./Routes/RoutesConst";

function App() {
  return (
    <div className="App">
          <Header/>
          <RoutesConst/>
    </div>
  );
}

export default App;
