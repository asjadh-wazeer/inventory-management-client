import React from 'react';
import "./App.css";
import Sidebar from './Sidebar';
import Brand from './Brand';
import Category from './Category';
import StoreAdd from "./StoreAdd";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Sidebar/>} />
            <Route path="/brand" element={<Brand/>} />
            <Route path="/store" element={<StoreAdd/>} />
            <Route path="/category" element={<Category/>} />
              
            
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
