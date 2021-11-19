import React, { createContext, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Brand from "./Brand";
import Category from "./Category";
import StoreAdd from "./StoreAdd";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Attribute from "./Attribute";
import AddProduct from "./AddProduct";
import ManageProduct from "./ManageProduct";
import Home from "./Home";
import Profile from "./UserProfile/Profile";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import PlaceOrder from "./PlaceOrder";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/store" element={<StoreAdd />} />
            <Route path="category" element={<Category />} />
            <Route path="/attribute" element={<Attribute />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/manageProduct" element={<ManageProduct />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<PlaceOrder />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
