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

import "./Brand.css";
import {
  Row,
  Col,
  FloatingLabel,
  Form,
  ButtonGroup,
  Table,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Brand() {
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
            <h2>Brands</h2>
          </div>
          <>
            <form onSubmit={handleSubmit}>
              <Row className="g-4 mt-4">
                <Col md>
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Name of the brand"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Name of the brand"
                      name="name"
                      onBlur={handleBlur}
                    />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingSelectGrid" label="Status">
                    <Form.Select
                      aria-label="Floating label select example"
                      name="brandType"
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
                Add Brand
              </Button>
            </form>
          </>
          <br />
          <Table striped bordered hover variant="light" className="text-center">
            <thead>
              <tr>
                <th>Brand Name</th>
                <th>Brand Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {brandsData.map((entry) => (
                <tr>
                  <td>{entry.name}</td>
                  <td>{entry.brandType}</td>
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

export default Brand;
