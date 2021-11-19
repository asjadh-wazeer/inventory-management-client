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
import Select from "react-select";
import {
  Row,
  Col,
  FloatingLabel,
  Form,
  ButtonGroup,
  Table,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./AddProduct.css";
function AddProduct() {
  const [product, setProduct] = useState({});
  const [dropdownValue, setDropdownValue] = useState("");
  const getDropdownValue = (dropdownValue) => {
    setDropdownValue(dropdownValue);
    const updatedProduct = { ...product };
    updatedProduct.store = dropdownValue;
    setProduct(updatedProduct);
  };
  console.log(product);
  const handleBlur = (e) => {
    const newData = { ...product };
    newData[e.target.name] = e.target.value;
    setProduct(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    const formData = {
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      size: product.size,
      color: product.color,
      image: product.image,
      brand: product.brand,
      store: product.store,
      productStatus: product.productStatus,
    };

    fetch("http://localhost:8000/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data) {
          alert("Product Added successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  const [brandsData, setBrandsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getBrands")
      .then((res) => res.json())
      .then((data) => {
        setBrandsData(data);
      });
  }, []);

  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getCategories")
      .then((response) => response.json())
      .then((json) => setCategoriesData(json));
  }, []);

  const categoryOptions = categoriesData.map((catData) => ({
    value: catData.name,
    label: catData.name,
  }));

  const [storesData, setStoresData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getStores")
      .then((response) => response.json())
      .then((json) => setStoresData(json));
  }, []);

  // const storeOptions = storesData.map((storeData) => ({
  //   value: storeData.name,
  //   label: storeData.name,
  // }));

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

      <div className="addProductContent w-4/5 mx-4">
        <div className="bg-blue-900 font-bold text-xl text-white py-3 flex items-center justify-center rounded">
          <h2>ADD PRODUCTS</h2>
        </div>
        <>
          <form onSubmit={handleSubmit}>
            <div className="d-flex cont-main">
              <div className="w-3/6 p-4 cont-first">
                <Form.Group className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="image"
                    name="image"
                    placeholder="Enter image url"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    placeholder="Quntity"
                    onBlur={handleBlur}
                  />
                </Form.Group>
              </div>
              <div className="w-3/6 p-4 cont-second">
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Color"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                    name="color"
                    onBlur={handleBlur}
                  >
                    <option value="Select">Select</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                  </Form.Select>
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Size"
                  className="mb-3"
                >
                  <Form.Select
                    aria-label="Floating label select example"
                    type="text"
                    name="size"
                    onBlur={handleBlur}
                  >
                    <option value="Select">Select</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </Form.Select>
                </FloatingLabel>

                <br />

                <FloatingLabel controlId="floatingSelectGrid" label="Status">
                  <Form.Select
                    aria-label="Floating label select example"
                    name="productStatus"
                    type="text"
                    onBlur={handleBlur}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Form.Select>
                </FloatingLabel>
                <br />
                <DropdownButton
                  id="dropdown-basic-button"
                  title={dropdownValue || "Store name"}
                >
                  {storesData.map((b) => (
                    <Dropdown.Item onClick={() => getDropdownValue(b.name)}>
                      {b.name}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="w-25 rounded-none mb-5"
              >
                SAVE
              </Button>
            </div>
          </form>
        </>
      </div>
    </div>
  );
}
export default AddProduct;
