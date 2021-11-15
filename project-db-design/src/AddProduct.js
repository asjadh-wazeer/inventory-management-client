import React from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Row,
    Col,
    FloatingLabel,
    Form,
    ButtonGroup,
    Table,
  } from "react-bootstrap";
  import { Button } from "react-bootstrap";
  import "./AddProduct.css"
function AddProduct() {
    return (
        <div className="right-side w-full  addProductContainer d-flex">


<div className="left-side  w-1/5 bg-black sideBar">
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

            <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
              <div className="w-2/12 flex items-center justify-center text-2xl">
                <FaBoxOpen />
              </div>
              <h4 className="w-8/12 flex items-center text-lg">Products</h4>
              <div className="w-2/12 flex items-center justify-center">
                <BiChevronLeft />
              </div>
            </div>

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


        <div className="addProductContent w-4/5 mx-4">

        <div className="bg-blue-900 font-bold text-xl text-white py-3 flex items-center justify-center rounded">
          <h2>ADD PRODUCTS</h2>
        </div>
        <>
        
          <form className="d-flex cont-main">
            <div className="w-3/6 p-4 cont-first">
              <Form.Group className="mb-3" >
                 <Form.Label>Image URL</Form.Label>
             <Form.Control type="text" placeholder="Enter image url" />
            
            
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                 <Form.Label>Price</Form.Label>
             <Form.Control type="text" placeholder="Enter price" />
             </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Quntity" />
            </Form.Group>

            </div>
              <div className="w-3/6 p-4 cont-second">
                <FloatingLabel controlId="floatingSelectGrid" label="Color" className="mb-3">
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                  >
                    <option value="Select">Select</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectGrid" label="Size" className="mb-3">
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                  >
                    <option value="Select">Select</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectGrid" label="Brand" className="mb-3">
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                  >
                    <option value="Select">Select</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Nike">Nike</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectGrid" label="Category" className="mb-3">
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                  >
                    <option value="Select">Select</option>  
                    <option value=""></option>
                    <option value=""></option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectGrid" label="Store" className="mb-3">
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                  >
                    <option value="Select">Select</option>  
                    <option value=""></option>
                    <option value=""></option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingSelectGrid" label="Store" className="mb-3">
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                  >
                    <option value="Select">Select</option>  
                    <option value=""></option>
                    <option value=""></option>
                  </Form.Select>
                </FloatingLabel>
              </div>
            <br />
            
          </form>
          <div className="flex items-center justify-center">
          <Button type="submit" variant="primary" className="w-20 rounded-none flex items-center justify-center">
              SAVE
            </Button>
            </div>
        </>
        </div>
      </div> 
    )
}
export default AddProduct;
