import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
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
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";

const PlaceOrder = () => {
  const [orderData, setOrderData] = useState({});
  const [dropdownValue, setDropdownValue] = useState("");

  const getDropdownValue = (dropdownValue) => {
    setDropdownValue(dropdownValue);
    const updatedProduct = { ...orderData };
    updatedProduct.product = dropdownValue;
    setOrderData(updatedProduct);
  };
  console.log(orderData);

  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
      });
  }, []);

  const handleBlur = (e) => {
    const newData = { ...orderData };
    newData[e.target.name] = e.target.value;
    setOrderData(newData);
    // console.log(newData);
  };

  const handleSubmit = (e) => {
    const formData = {
      name: orderData.name,
      address: orderData.address,
      number: orderData.number,
      product: orderData.product,
    };

    fetch("http://localhost:8000/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data) {
          alert("Order Added successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  return (
    <div className="side-bar">
      <div className="brandContainer">
        <div className="left-side w-1/5 bg-black sideBar">
          <div className="bg-blue-900 font-bold text-xl text-white py-3 flex items-center justify-center rounded">
            <h2>Admin</h2>
          </div>

          <div className="text-gray-400 mt-4">
            <Link to="/dashboard" className="no-underline">
              <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
                <div className="w-2/12 flex items-center justify-center text-2xl">
                  <BsTagsFill />
                </div>
                <h4 className="w-8/12 flex items-center text-lg">Dashboard</h4>
                <span className="w-2/12 "></span>
              </div>
            </Link>

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
                <h4 className="w-8/12 flex items-center text-lg">
                  Add Product
                </h4>
                <span className="w-2/12 "></span>
              </div>
            </a>

            <a href="/manageProduct" className="no-underline">
              <div className="flex font-medium mb-4 ml-3 text-gray-400 hover:text-gray-300 cursor-pointer">
                <div className="w-2/12 flex items-center justify-center text-2xl">
                  <FaLayerGroup />
                </div>
                <h4 className="w-8/12 flex items-center text-lg">
                  Manage Product
                </h4>
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

        <div className="right-side w-4/5 px-6 brandContent">
          <div className="bg-blue-900 font-bold text-xl text-white py-3 flex items-center justify-center rounded">
            <h2>Add Order</h2>
          </div>

          <form onSubmit={handleSubmit}>
          <div className="mt-3">
              <Form.Group className="mb-3">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onBlur={handleBlur}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Customer Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Address"
                  name="address"
                  onBlur={handleBlur}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Customer Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your Number"
                  name="number"
                  onBlur={handleBlur}
                />
              </Form.Group>

              <br />
              <DropdownButton
                id="dropdown-basic-button"
                title= {dropdownValue || "Product Name"}
              >
                {
                    productsData.map(p => (<Dropdown.Item onClick={() => getDropdownValue(p.name)}>{p.name}</Dropdown.Item>))
                }
              </DropdownButton>
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
          </div>
          </form>

          <br />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
