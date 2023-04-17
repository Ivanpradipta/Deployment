import gambar from "../Image/logo_B.png";
import article from "../Language";
import ChangeProduct from "../ChangeProduct";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productList, setProductList] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://64301554b289b1dec4c0e920.mockapi.io/products")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleonClick = async (event) => {
    event.preventDefault();
    const number = Math.floor(Math.random() * 100);
    console.log(number);

    try {
      const response = await axios.post(
        "https://64301554b289b1dec4c0e920.mockapi.io/products",
        {
          name: productName,
          category: productCategory,
          freshness: productFreshness,
          price: productPrice,
          image: productImage,
        }
      );

      setProductList((prevProductList) => [...prevProductList, response.data]);

      setProductName("");
      setProductCategory("");
      setProductImage("");
      setProductFreshness("");
      setProductPrice("");

      alert("Data saved successfully!");
    } catch (error) {
      console.log(error);
    }

    
  };

  const handleDelete = async (product) => {
    const alert = window.confirm("Apakah kalian ingin menghapus?");
    if (alert) {
      try {
        await axios.delete(
          `https://64301554b289b1dec4c0e920.mockapi.io/products/${product.id}`
        );
        setProductList((prevProductList) =>
          prevProductList.filter((item) => item.id !== product.id)
        );
        alert("Data deleted successfully!");
      } catch (error) {
        console.log(error);
      }
    }
  };


  

  

  return (
    <>
      <br />
      <br />
      <div className="header1">
        <img src={gambar} alt="logo" />
        <h1>{article.title.id}</h1>
        <p>{article.description.en}</p>
      </div>
      <form className="row g-3">
        <div className="main">
          <h3>Detail Product</h3>
          <div className="col-md-4">
            <label htmlFor="validationDefault01" className="form-label">
              Product name
            </label>
            <input
              maxLength="5"
              type="text"
              className="form-control"
              id="validationDefault01"
              value={productName}
              onChange={(event) => {
                setProductName(event.target.value);
              }}
              required=""
            />
          </div>
        </div>
        <div className="main2">
          <label htmlFor="Category">Product Category </label>
          <br />
          <select
            className="form-select"
            aria-label="Default select example"
            id="Category"
            required=""
            value={productCategory}
            onChange={(event) => setProductCategory(event.target.value)}
          >
            <option value="" />
            <option value="Spicy">spicy</option>
            <option value="sweet">sweet</option>
            <option value="sour">sour</option>
          </select>
        </div>
        <div className="main3">
          <label htmlFor="image-product">Image of Product</label>
          <div className="mb-3">
            <input
              className="form-control"
              type="file"
              id="gambar"
              multiple=""
              required=""
              onChange={(event) => setProductImage(event.target.files[0])}
            />
          </div>
        </div>
        <div className="main4">
          <label htmlFor="freshmen">Product freshness </label>
          <br />
          <input
            type="radio"
            id="Brand-new"
            name="Product-freshness"
            value="Brand New"
            checked={productFreshness === "Brand New"}
            onChange={(event) => setProductFreshness(event.target.value)}
          />
          <label htmlFor="html">Brand New</label>
          <br />
          <input
            type="radio"
            id="Second-hand"
            name="Product-freshness"
            value="Second Hand"
            checked={productFreshness === "Second Hand"}
            onChange={(event) => setProductFreshness(event.target.value)}
          />
          <label htmlFor="CSS">Second Hand</label>
          <br />
          <input
            type="radio"
            id="Refurbished"
            name="Product-freshness"
            value="Refurbished"
            checked={productFreshness === "Refurbished"}
            onChange={(event) => setProductFreshness(event.target.value)}
          />
          <label htmlFor="JavaScript">Refurbished</label>
        </div>
        <div className="main6">
          <label htmlFor="a">Additional Description</label>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 100 }}
            />
          </div>
        </div>
        <div className="main5">
          <label htmlFor="price">Product Price: </label>
          <br />
          <input
            type="number"
            placeholder="$1"
            required=""
            id="price"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
          />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            id="Submit"
            onClick={handleonClick}
          >
            Submit
          </button>
        </div>
      </form>

      {/* <table className="table table-striped" id="tables">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Image</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.image} height="50" />
              </td>
              <td>{product.freshness}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleDelete(product)}>Delete</button>
                <button >Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      


    </>
  );
}

export default CreateProduct;
