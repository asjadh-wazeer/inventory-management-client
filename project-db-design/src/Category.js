import React from 'react';

import { AiFillDashboard } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BiChevronLeft } from 'react-icons/bi';
import { FaLayerGroup } from 'react-icons/fa';
import { BsTagsFill } from 'react-icons/bs';
import { FaBoxOpen } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { AiFillSignal } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiTwotoneSetting } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,FloatingLabel,Form} from "react-bootstrap";






function Category() {
    return (
        
        <div className="side-bar ">
            <div className="w-full flex">
                <div className="left-side w-1/5 bg-black">
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
                            <div className="w-2/12 flex items-center justify-center"><BiChevronLeft /></div>
                        </div>

                        <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
                            <div className="w-2/12 flex items-center justify-center text-2xl">
                                <FaLayerGroup />
                            </div>
                            <h4 className="w-8/12 flex items-center text-lg">Groups</h4>
                            <div className="w-2/12 flex items-center justify-center"><BiChevronLeft /></div>
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
                        </div></a>
                        
                        <a href="/store" className="no-underline">
                        <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
                        <div className="w-2/12 flex items-center justify-center text-2xl">
                            <FaLayerGroup /></div>
                            <h4 className="w-8/12 flex items-center text-lg">Stores</h4>
                            <span className="w-2/12 "></span>
                        </div>
                        </a>

                        <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
                        <div className="w-2/12 flex items-center justify-center text-2xl">
                            <FaLayerGroup /></div>
                            <h4 className="w-8/12 flex items-center text-lg">Attributes</h4>
                            
                        </div>

                        <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
                        <div className="w-2/12 flex items-center justify-center text-2xl">
                            <FaBoxOpen /></div>
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
                            <AiOutlineUser /></div>
                            <h4 className="w-8/12 flex items-center text-lg">Profile</h4>
                            <span className="w-2/12 "></span>
                        </div>

                        <div className="flex font-medium mb-4 ml-3 hover:text-gray-300 cursor-pointer">
                        <div className="w-2/12 flex items-center justify-center text-2xl">
                            <AiTwotoneSetting /></div>
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
                
                <div className="right-side w-4/5 px-6">

                <div className="bg-blue-900 font-bold text-xl text-white py-3 flex items-center justify-center rounded"> 
                    <h2>Categories</h2>
                </div>
                <>
                <Row className="g-4 mt-4">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="Name of the category">
                        <Form.Control type="text" placeholder="Name of the Category" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Status">
                        <Form.Select aria-label="Floating label select example">
                            <option>Select</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                </>
                
                </div>

            </div></div>
            
            
        
    )
}

export default Category;