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
import { BsFillTrashFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, FloatingLabel, Form, Button, Table } from "react-bootstrap";
import "./Store.css";

function StoreAdd() {
  const [storeData, setStoreData] = useState({});

  const [storesData, setStoresData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getStores")
      .then((response) => response.json())
      .then((json) => setStoresData(json));
  }, []);

  const handleBlur = (e) => {
    const newData = { ...storeData };
    newData[e.target.name] = e.target.value;
    setStoreData(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    const formData = {
      name: storeData.name,
      storeStatus: storeData.storeStatus,
    };

    fetch("http://localhost:8000/stores", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data) {
          alert("Store Added successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/deleteStore/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const newStoreData = storesData.filter((store) => store._id !== id);
          setStoresData(newStoreData);
        }
      });
  };
  return (
    <div className="side-bar ">
      <div className="storeContainer">
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

        <div className="right-side w-4/5 px-6 storeContent">
          <div className="bg-blue-900 font-bold text-xl text-white py-3 flex items-center justify-center rounded">
            <h2>Stores</h2>
          </div>
          <>
            <form onSubmit={handleSubmit}>
              <Row className="g-4 mt-4">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Name of the store"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Name of the store"
                      name="name"
                      onBlur={handleBlur}
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingSelectGrid" label="Status">
                    <Form.Select
                      aria-label="Floating label select example"
                      name="storeStatus"
                      type="text"
                      onBlur={handleBlur}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <br />
              <Button type="submit" variant="primary" className="w-25">
                Add Store
              </Button>
            </form>
          </>
          <br />
          <Table striped bordered hover variant="light" className="text-center">
            <thead>
              <tr>
                <th>Store Name</th>
                <th>Store Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {storesData.map((entry) => (
                <tr>
                  <td>{entry.name}</td>
                  <td>{entry.storeStatus}</td>
                  <td>
                    <div style={{ width: "10px", margin: "0 auto" }}>
                      <BsFillTrashFill
                        onClick={() => handleDelete(entry._id)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default StoreAdd;
