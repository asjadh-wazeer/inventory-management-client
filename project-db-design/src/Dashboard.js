import React, { useEffect, useState } from "react";
 
import { AiFillDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiChevronLeft } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa";
import { BsTagsFill } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { BsFillTrashFill } from 'react-icons/bs';
 
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdBarChart } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoIosHome } from 'react-icons/io';
 
import "bootstrap/dist/css/bootstrap.min.css";
 
import "./Dashboard.css";
import {
  Row,
  Col,
  FloatingLabel,
  Form,
  ButtonGroup,
  Table,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
 
function Dashboard() {
  const [brandData, setBrandData] = useState({});
 
  const [brandsData, setBrandsData] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:8000/getBrands")
      .then((res) => res.json())
      .then((data) => {
        setBrandsData(data);
      });
  }, []);
 
  const handleBlur = (e) => {
    const newData = { ...brandData };
    newData[e.target.name] = e.target.value;
    setBrandData(newData);
    console.log(newData);
  };
 
  const handleSubmit = (e) => {
    const formData = {
      name: brandData.name,
      brandType: brandData.brandType,
    };
 
    fetch("http://localhost:8000/addBrand", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data) {
          alert("Brand Added successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
 
    e.preventDefault();
  };
 
 
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/deleteBrand/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          const newEntryData = brandsData.filter(
            (specificEntry) => specificEntry._id !== id
          );
          setBrandsData(newEntryData);
        }
      });
  };
 
 
  return (
    <div className="side-bar">
      <div className="mainContainer w-full">
        <div className="left-side w-1/5 bg-black sideBar">
          <div className="bg-blue-900 font-bold text-xl text-white py-3 flex items-center justify-center rounded">
            <h2>Admin</h2>
          </div>
 
          <div className="text-gray-400 ">
            <div className="flex font-medium w-full my-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <AiFillDashboard />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Dashboard</h4>
              <span className="w-2/12 "></span>
            </div>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <FaUsers />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Users</h4>
              <div className="w-2/12 flex items-center justify-center">
                <BiChevronLeft />
              </div>
            </div>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <FaLayerGroup />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Groups</h4>
              <div className="w-2/12 flex items-center justify-center">
                <BiChevronLeft />
              </div>
            </div>
 
            <a href="/brand" className="no-underline">
              <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
                <div className="w-2/12 flex items-center justify-center text-2xl">
                  <BsTagsFill />
                </div>
                <h4 className="w-8/12 flex items-center text-lg">Brands</h4>
                <span className="w-2/12 "></span>
              </div>
            </a>
            <a href="/category" className="no-underline">
              <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
                <div className="w-2/12 flex items-center justify-center text-2xl">
                  <FaLayerGroup />
                </div>
                <h4 className="w-8/12 flex items-center text-lg">Category</h4>
                <span className="w-2/12 "></span>
              </div>
            </a>
 
            <a href="/store" className="no-underline">
              <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
                <div className="w-2/12 flex items-center justify-center text-2xl">
                  <FaLayerGroup />
                </div>
                <h4 className="w-8/12 flex items-center text-lg">Stores</h4>
                <span className="w-2/12 "></span>
              </div>
            </a>
 
            <a href="/attribute" className="no-underline">
              <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
                <div className="w-2/12 flex items-center justify-center text-2xl">
                  <FaLayerGroup />
                </div>
                <h4 className="w-8/12 flex items-center text-lg">Attributes</h4>
                <span className="w-2/12 "></span>
              </div>
            </a>
 
            <a href="/addProduct" className="no-underline">
            <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <FaLayerGroup />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Add Product</h4>
              <span className="w-2/12 "></span>
            </div>
          </a>
 
          <a href="/manageProduct" className="no-underline">
            <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <FaLayerGroup />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Manage Product</h4>
              <span className="w-2/12 "></span>
            </div>
          </a>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <BiDollar />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Orders</h4>
              <div className="w-2/12 flex items-center justify-center">
                <BiChevronLeft />
              </div>
            </div>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <AiFillSignal />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Reports</h4>
              <span className="w-2/12 "></span>
            </div>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <FaLayerGroup />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Company</h4>
              <span className="w-2/12 "></span>
            </div>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <AiOutlineUser />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Profile</h4>
              <span className="w-2/12 "></span>
            </div>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <AiTwotoneSetting />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Setting</h4>
              <span className="w-2/12 "></span>
            </div>
 
            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <HiOutlineLogout />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Logout</h4>
              <span className="w-2/12 "></span>
            </div>
          </div>
        </div>
 
        <div className="right-side w-4/5 px-6 brandContent ">
       
        <div className="w-full nav-bar items-center pt-4">
            <div className="d-flex nav-left">
                <h4 className="font-bold text-2xl">Dashboard </h4> &nbsp;
                <h4 className="font-medium text-gray-700 text-base">Controll panel</h4>
            </div>
            <div className="d-flex nav-right">
                <h4 className="d-flex pr-2 text-lg items-center"><IoIosHome/> Home</h4>
                <h4 className="text-lg items-center">Dashboard</h4>
            </div>
 
        </div>
 
        <div className="py-12 box-container w-full">
           
                    <div className="w-full d-flex boxes">
                      <div className="w-1/4 bg-blue-600 d-flex items-center justify-center mr-6 box py-3">
                          <div className="text-white px-3">
                            <h1 className="font-bold">0</h1>
                            <h4 className="text-base">Total Products</h4>
                          </div>
                          <div className="text-8xl text-gray-600"><HiOutlineShoppingBag /></div>
                      </div>
 
                      <div className="w-1/4 bg-green-600 d-flex items-center justify-center mr-6 box">
                          <div className="text-white px-3">
                            <h1 className="font-bold">0</h1>
                            <h4 className="text-base one-line">Total Paid Orders</h4>
                          </div>
                          <div className="text-8xl text-gray-600"><MdBarChart /></div>
                      </div>
 
                     
 
                      <div className="w-1/4 bg-yellow-500 d-flex items-center justify-center mr-6 box">
                          <div className="text-white px-3">
                            <h1 className="font-bold">0</h1>
                            <h4 className="text-base one-line">Total Users</h4>
                          </div>
                          <div className="text-8xl text-gray-600 px-3"><FaUserFriends /></div>
                      </div>
 
                      <div className="w-1/4 bg-red-600 d-flex items-center justify-center box">
                          <div className="text-white px-3">
                            <h1 className="font-bold">0</h1>
                            <h4 className="text-base">Total Stores</h4>
                          </div>
                          <div className="text-8xl text-gray-600"><IoIosHome /></div>
                      </div>
                    </div>
        </div>
                   
                 
           
        </div>
      </div>
     
                 
    </div>
 
   
  );
}
 
export default Dashboard;